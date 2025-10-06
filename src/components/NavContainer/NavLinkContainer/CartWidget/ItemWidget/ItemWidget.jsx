import styles from "./ItemWidget.module.css";

const ItemWidget = ({ name, image, description }) => {
	return (
		<div className={styles.itemCard}>
			<img className={styles.image} src={image}></img>
			<h3 className={styles.title}>{name}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default ItemWidget;
