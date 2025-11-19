import ItemWidget from "./ItemWidget/ItemWidget";
import styles from "./CartWidget.module.css";
import { useCart } from "../../../../context/CartProvider";

const CartWidget = () => {
	const { cart, clearCart, totalPrice } = useCart();

	return (
		<div className={styles.cartWidget}>
			<button className={styles.button} onClick={clearCart}>
				Clear
			</button>
			{cart.map((item) => (
				<ItemWidget key={item.snapshotName} item={item} />
			))}
			<p className={styles.totalPrice}>
				<strong>Total:</strong> ${totalPrice}
			</p>
		</div>
	);
};

export default CartWidget;
