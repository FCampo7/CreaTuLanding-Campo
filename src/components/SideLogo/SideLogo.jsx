import styles from "./SideLogo.module.css";
import logo from "../../assets/Avra-Studio-Solo-Logo.png";
import logoText from "../../assets/Avra-Studio-Solo-Text.png";
import { NavLink } from "react-router-dom";

const SideLogo = ({ height }) => {
	return (
		<>
			<NavLink className={styles.logo} to="/">
				<img height={height} src={logo} />
				<img height={height} src={logoText} />
			</NavLink>
		</>
	);
};

export default SideLogo;
