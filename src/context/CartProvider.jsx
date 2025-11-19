import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { useUser } from "./UserContext";

import { db } from "../firebase/config";

import {
	collection,
	getDocs,
	setDoc,
	doc,
	updateDoc,
	deleteDoc,
	addDoc,
	query,
	where,
} from "firebase/firestore";

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
	const { user } = useUser();
	const [cart, setCart] = useState([]); // items
	const [pendingCartId, setPendingCartId] = useState(null);

	// Cuando hay un usuario se cargar su carrito pending
	useEffect(() => {
		if (!user) {
			setCart([]);
			setPendingCartId(null);
			return;
		}

		const loadCart = async () => {
			try {
				// obtener todos los carritos del user
				const q = query(
					collection(db, "carts"),
					where("userId", "==", user.uid)
				);

				const snapshot = await getDocs(q);

				let pendingCart = null;

				snapshot.forEach((docu) => {
					const data = docu.data();
					if (data.status === "pending")
						pendingCart = { id: docu.id, ...data };
				});

				// Si NO existe un carrito pending → crearlo
				if (!pendingCart) {
					const newCart = {
						userId: user.uid,
						status: "pending",
						items: [],
						total: 0,
						createdAt: new Date(),
					};

					const created = await addDoc(
						collection(db, "carts"),
						newCart
					);
					pendingCart = { id: created.id, ...newCart };
				}

				setPendingCartId(pendingCart.id);
				setCart(pendingCart.items || []);
			} catch (err) {
				console.error("Error loading cart: ", err);
			}
		};

		loadCart();
	}, [user]);

	// Totales
	const totalProducts = cart.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = cart
		.reduce((acc, item) => acc + item.price * item.quantity, 0)
		.toFixed(2);

	// Guardar cambios en Firestore
	const syncCartWithFirestore = async (newCartItems) => {
		if (!pendingCartId) return;

		const cartRef = doc(db, "carts", pendingCartId);

		await updateDoc(cartRef, {
			items: newCartItems,
			total: newCartItems.reduce(
				(acc, curr) => acc + curr.price * curr.quantity,
				0
			),
		});
	};

	// Agregar producto
	const addToCart = async (product, count = 1) => {
		if (!user || !pendingCartId) return;

		setCart((prev) => {
			const exists = prev.find((i) => i.productId === product.id);

			let updated;
			if (exists) {
				updated = prev.map((i) =>
					i.productId === product.id
						? { ...i, quantity: i.quantity + count }
						: i
				);
			} else {
				updated = [
					...prev,
					{
						productId: product.id,
						price: product.price,
						images: product.images,
						snapshotName: product.title,
						quantity: count,
					},
				];
			}

			syncCartWithFirestore(updated);
			return updated;
		});
	};

	const subtractFromCart = async (product) => {
		if (!user || !pendingCartId) return;

		setCart((prev) => {
			const exists = prev.find((i) => i.productId === product.id);

			if (!exists) {
				return prev;
			}

			let updated = prev
				.map((i) =>
					i.productId === product.id
						? { ...i, quantity: i.quantity - 1 }
						: i
				)
				.filter((i) => i.quantity > 0);

			syncCartWithFirestore(updated);
			return updated;
		});
	};

	// Eliminar producto
	const removeFromCart = async (productId) => {
		if (!pendingCartId) return;

		setCart((prev) => {
			const updated = prev.filter((i) => i.productId !== productId);
			syncCartWithFirestore(updated);
			return updated;
		});
	};

	// Vaciar carrito
	const clearCart = async () => {
		if (!pendingCartId) return;

		setCart([]);
		await updateDoc(doc(db, "carts", pendingCartId), {
			items: [],
			total: 0,
		});
	};

	return (
		<CartContext.Provider
			value={{
				user,
				cart,
				totalProducts,
				totalPrice,
				addToCart,
				subtractFromCart,
				removeFromCart,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
