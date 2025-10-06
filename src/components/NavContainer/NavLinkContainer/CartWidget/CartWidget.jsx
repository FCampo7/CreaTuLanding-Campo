import ItemWidget from "./ItemWidget/ItemWidget";
import img from "../../../../assets/Avra-Studio-Logo.png";
import styles from "./CartWidget.module.css";

const CartWidget = () => {
	const items = [];

	for (let i = 0; i < 10; i++) {
		items.push(
			<ItemWidget
				name={"item #" + i}
				image={img}
				description="Descripción"
			/>
		);
	}

	return <div className={styles.cartWidget}>{items}</div>;
};

export default CartWidget;
