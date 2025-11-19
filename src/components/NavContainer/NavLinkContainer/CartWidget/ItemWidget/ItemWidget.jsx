import { useNavigate } from "react-router-dom";
import useFetch from "../../../../../hooks/useFetch";
import CartButtons from "../../../../CartButtons/CartButtons";
import styles from "./ItemWidget.module.css";

const ItemWidget = ({ item }) => {
	const { data } = useFetch(
		`https://dummyjson.com/products/${item.productId}`
	);

	const navigate = useNavigate();

	return (
		<>
			{data && (
				<div className={styles.itemCard}>
					<div
						className={styles.itemCard}
						onClick={() => navigate(`/details/${item.productId}`)}
					>
						<img
							className={styles.image}
							src={item.images[0]}
						></img>
						<h3 className={styles.title}>{item.snapshotName}</h3>
						<div className={styles.price}>
							<p>
								${item.price} x {item.quantity}
							</p>
						</div>
					</div>
					<CartButtons product={data} />
				</div>
			)}
		</>
	);
};

export default ItemWidget;
