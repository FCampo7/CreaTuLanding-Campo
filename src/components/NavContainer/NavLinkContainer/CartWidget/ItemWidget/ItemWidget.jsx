import styles from "./ItemWidget.module.css";

const ItemWidget = ({ name, image, price, quantity }) => {
	return (
		<div className={styles.itemCard}>
			<img className={styles.image} src={image}></img>
			<h3 className={styles.title}>{name}</h3>
			<div className={styles.price}>
				<p>
					${price} x {quantity}
				</p>
			</div>
		</div>
	);
};

export default ItemWidget;
