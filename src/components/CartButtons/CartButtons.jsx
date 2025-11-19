import { MinusCircle, PlusCircle, Trash } from "lucide-react";
import styles from "./CartButtons.module.css";
import { useCart } from "../../context/CartProvider";

const CartButtons = ({ product }) => {
	const { addToCart, subtractFromCart, removeFromCart } = useCart();
	return (
		<div className={styles.buttonsContainer}>
			<PlusCircle
				size={20}
				color="#3faa55ff"
				onClick={() => addToCart(product)}
			/>
			<MinusCircle
				size={20}
				color="#ff0000"
				onClick={() => subtractFromCart(product)}
			/>
			<Trash
				size={20}
				color="#ff0000"
				onClick={() => removeFromCart(product.id)}
			/>
		</div>
	);
};

export default CartButtons;
