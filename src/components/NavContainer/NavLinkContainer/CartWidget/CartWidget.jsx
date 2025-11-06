import ItemWidget from "./ItemWidget/ItemWidget";
import styles from "./CartWidget.module.css";
import { useCart } from "../../../../context/CartProvider";

const CartWidget = () => {
	const { cart, clearCart, totalPrice } = useCart();

	return (
		<>
			<div className={styles.cartWidget}>
				<button onClick={() => clearCart()}>Clear</button>
				<p>{totalPrice}</p>
				{cart.map((item) => (
					<ItemWidget
						name={item.title}
						image={item.images[0]}
						price={item.price}
						quantity={item.count}
					/>
				))}
			</div>
		</>
	);
};

export default CartWidget;
