import ItemListContainer from "./ItemListContainer/ItemListContainer";
import styles from "./MainContainer.module.css";

const MainContainer = () => {
	return (
		<>
			<main className={styles.main}>
				<ItemListContainer />
			</main>
		</>
	);
};

export default MainContainer;
