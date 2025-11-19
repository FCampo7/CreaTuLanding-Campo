import SideLogo from "../SideLogo/SideLogo.jsx";
import NavLinkContainer from "./NavLinkContainer/NavLinkContainer.jsx";
import styles from "./NavContainer.module.css";

const NavContainer = () => {
	return (
		<div className={styles.navContainer}>
			<SideLogo height={50} />
			<NavLinkContainer />
		</div>
	);
};

export default NavContainer;
