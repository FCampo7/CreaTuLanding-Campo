import styles from "./ItemListContainer.module.css";
import FetchProducts from "../../FetchProducts";
import Products from "../../Products";

const ItemListContainer = () => {
	return (
		<>
			<h3>Bienvenido</h3>
			<FetchProducts />
			<Products />
		</>
	);
};

export default ItemListContainer;
