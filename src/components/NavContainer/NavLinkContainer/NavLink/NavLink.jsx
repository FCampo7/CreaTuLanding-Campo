import styles from "./NavLink.module.css";

const NavLink = ({ text, link, icon: Icon, onClick }) => {
	return (
		<>
			<a className={styles.navLink} href={link} onClick={onClick}>
				{Icon && <Icon size={16}></Icon>}&nbsp;
				{text}
			</a>
		</>
	);
};

export default NavLink;
