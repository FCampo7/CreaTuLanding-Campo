import { useState } from "react";
import { ShoppingCart, Menu } from "lucide-react";
import NavLink from "./NavLink/NavLink";
import CartWidget from "./CartWidget/CartWidget";
import styles from "./NavLinkContainer.module.css";

const NavLinkContainer = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isHamburger, setIsHamburger] = useState(false);

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	const toggleHamburger = () => {
		setIsHamburger(!isHamburger);
	};

	const HamburgerMenu = () => (
		<div className={styles.hamburgerMenu} onClick={toggleHamburger}>
			<Menu />
		</div>
	);

	return (
		<>
			<div
				className={`${styles.navLinkContainer} ${
					isHamburger ? styles.visible : styles.hidden
				}`}
			>
				<NavLink text="Home" link="#" />
				<NavLink text="Cart" icon={ShoppingCart} onClick={toggleCart} />
			</div>

			<HamburgerMenu />

			{
				/* Esto es para renderizar el widget del carrito */
				isCartOpen && (
					<div
						className={`${styles.widgetContainer} ${
							isCartOpen ? styles.visible : styles.hidden
						}`}
					>
						<CartWidget />
					</div>
				)
			}
		</>
	);
};

export default NavLinkContainer;
