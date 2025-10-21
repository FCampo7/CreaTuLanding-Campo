import styles from "./ItemListContainer.module.css";
import Products from "./Products";

const ItemListContainer = () => {
	return (
		<>
			<h3>Products</h3>
			<div className={styles.itemListContainer}>
				<Products />
			</div>
		</>
	);
};

export default ItemListContainer;
