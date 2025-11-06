import styles from "./ItemWidget.module.css";

const ItemWidget = ({ name, image, price, quantity }) => {
	return (
		<div className={styles.itemCard}>
			<img className={styles.image} src={image}></img>
			<h3 className={styles.title}>{name}</h3>
			<p className={styles.price}>{price}</p>
			<p>{quantity}</p>
		</div>
	);
};

export default ItemWidget;
