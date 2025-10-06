import styles from "./SideLogo.module.css";
import logo from "../../assets/Avra-Studio-Solo-Logo.png";
import logoText from "../../assets/Avra-Studio-Solo-Text.png";

const SideLogo = ({ height }) => {
	return (
		<>
			<a className={styles.logo} href="#">
				<img height={height} src={logo} />
				<img height={height} src={logoText} />
			</a>
		</>
	);
};

export default SideLogo;
