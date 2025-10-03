import Logo from "../Logo/Logo.jsx";
import styles from "./NavContainer.module.css";
import NavLinkContainer from "./NavLinkContainer/NavLinkContainer.jsx";

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
