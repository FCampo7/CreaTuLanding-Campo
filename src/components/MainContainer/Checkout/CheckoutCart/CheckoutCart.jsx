import styles from "./CheckoutCart.module.css";
import { useCart } from "../../../../context/CartProvider";
import ItemWidget from "../../../NavContainer/NavLinkContainer/CartWidget/ItemWidget/ItemWidget";

const CheckoutCart = () => {
	const { cart, totalPrice } = useCart();

	return (
		<div className={styles.checkoutCartContainer}>
			{cart.map((item) => (
				<ItemWidget key={item.productId} item={item} />
			))}
			<p className={styles.price}>
				<strong>Total:</strong> ${totalPrice}
			</p>
		</div>
	);
};

export default CheckoutCart;
