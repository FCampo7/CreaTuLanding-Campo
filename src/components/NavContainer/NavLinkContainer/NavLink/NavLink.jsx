import styles from "./NavLink.module.css";

const NavLink = ({ link, onClick, children }) => {
	return (
		<>
			<a className={styles.navLink} href={link} onClick={onClick}>
				{children}
			</a>
		</>
	);
};

export default NavLink;
