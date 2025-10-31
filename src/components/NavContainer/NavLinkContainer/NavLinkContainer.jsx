import { useState } from "react";
import { ShoppingBasket, ShoppingCart, Menu, Home } from "lucide-react";
import CartWidget from "./CartWidget/CartWidget";
import styles from "./NavLinkContainer.module.css";
import { NavLink } from "react-router-dom";

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
				<NavLink className={styles.navLink} to="/">
					<Home height={16} />
					<p>Home</p>
				</NavLink>
				<NavLink className={styles.navLink} to={`/products`}>
					<ShoppingBasket height={16} />
					<p>Products</p>
				</NavLink>
				<NavLink className={styles.navLink} onClick={toggleCart}>
					<ShoppingCart height={16} />
					<p>Cart</p>
				</NavLink>
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
