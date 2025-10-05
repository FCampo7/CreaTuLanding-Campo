import styles from "./Logo.module.css";
import logo from "../../assets/Avra-Studio-Logo2.png";
import logo2 from "../../assets/Avra-Studio-Logo3.png";

const Logo = () => {
	return (
		<>
			<a className={styles.logo} href="#">
				<img height="50px" src={logo} />
				<img height={50} src={logo2} />
			</a>
		</>
	);
};

export default Logo;
