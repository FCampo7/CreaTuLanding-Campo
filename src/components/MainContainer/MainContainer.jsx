import styles from "./MainContainer.module.css";
import fullLogo from "../../assets/Avra-Studio-Full-Logo.png";

const MainContainer = () => {
	return (
		<>
			<main className={styles.main}>
				<img width={120} src={fullLogo} />
				<h3>Bienvenidos</h3>
			</main>
		</>
	);
};

export default MainContainer;
