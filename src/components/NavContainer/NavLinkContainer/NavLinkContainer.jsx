import { useState } from "react";
import NavLink from "./NavLink/NavLink";
import styles from "./NavLinkContainer.module.css";
import { ShoppingCart } from "lucide-react";
import CartWidget from "./CartWidget/CartWidget";

const NavLinkContainer = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const toggleCart = () => {
		setIsCartOpen(!isCartOpen);
	};

	return (
		<>
			<div className={styles.navLinkContainer}>
				<NavLink text="Home" link="#" />
				<NavLink text="Cart" icon={ShoppingCart} onClick={toggleCart} />
			</div>

			{
				/* Esto es para renderizar el widget del carrito */
				isCartOpen && (
					<div className={styles.widgetContainer}>
						<CartWidget />
					</div>
				)
			}
		</>
	);
};

export default NavLinkContainer;
