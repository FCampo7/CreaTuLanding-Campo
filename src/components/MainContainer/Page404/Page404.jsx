import { Frown } from "lucide-react";
import styles from "./Page404.module.css";
import { NavLink } from "react-router-dom";

const Page404 = () => {
	return (
		<div className={styles.div404}>
			<Frown size={162} color="#635151ff" />
			<h2>404</h2>
			<h3>
				Upss! Looks like you are lost. Check out these{" "}
				<NavLink className={styles.navLink} to="/products">
					Products!
				</NavLink>
			</h3>
		</div>
	);
};

export default Page404;
