import styles from "./Checkout.module.css";
import CheckoutCart from "./CheckoutCart/CheckoutCart";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = () => {
	return (
		<div className={styles.divFull}>
			<h3>Checkout</h3>
			<div className={styles.divContainer}>
				<CheckoutCart />
				<CheckoutForm />
			</div>
		</div>
	);
};

export default Checkout;
