import ItemListContainer from "./ItemListContainer/ItemListContainer";
import styles from "./MainContainer.module.css";
import logo from "../../assets/Avra-Studio-Logo.png";

const MainContainer = () => {
	return (
		<>
			<main className={styles.main}>
				<img width={120} src={logo} />
				<ItemListContainer />
			</main>
		</>
	);
};

export default MainContainer;
