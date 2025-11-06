import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => useContext(CartContext);

function CartProvider({ children }) {
	const [cart, setCart] = useState(() => {
		const stored = localStorage.getItem("avraCart");
		return stored ? JSON.parse(stored) : [];
	});

	useEffect(() => {
		localStorage.setItem("avraCart", JSON.stringify(cart));
	}, [cart]);

	const totalProducts = cart.reduce((acc, current) => acc + current.count, 0);

	const totalPrice = cart
		.reduce((acc, item) => acc + item.price * item.count, 0)
		.toFixed(2);

	const addToCart = (product, count = 1) => {
		setCart((prev) => {
			const existing = prev.find((item) => item.id === product.id);
			if (existing) {
				return prev.map((item) =>
					item.id === product.id
						? { ...item, count: item.count + count }
						: item
				);
			} else {
				return [...prev, { ...product, count }];
			}
		});
	};

	const removeFromCart = (id) => {
		setCartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const clearCart = () => setCart([]);

	return (
		<CartContext.Provider
			value={{
				totalProducts,
				addToCart,
				cart,
				clearCart,
				removeFromCart,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
