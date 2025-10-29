import styles from "./ItemListContainer.module.css";
import Products from "./Products";

const ItemListContainer = () => {
	return (
		<div className={styles.products}>
			<h3>Products</h3>
			<div className={styles.itemListContainer}>
				<Products />
			</div>
		</div>
	);
};

export default ItemListContainer;
