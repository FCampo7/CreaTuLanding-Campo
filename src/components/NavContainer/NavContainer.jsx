import Logo from "../Logo/Logo.jsx";
import NavLinkContainer from "./NavLinkContainer/NavLinkContainer.jsx";
import styles from "./NavContainer.module.css";

const NavContainer = () => {
	return (
		<>
			<div className={styles.navContainer}>
				<Logo />
				<NavLinkContainer />
			</div>
		</>
	);
};

export default NavContainer;
