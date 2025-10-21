import useFetch from "../../../hooks/useFetch";
import styles from "./Products.module.css";
import { ShoppingCart } from "lucide-react";

const url = "https://dummyjson.com/products/?limit=12&skip=0&delay=1000";

const url2 = "https://fakestoreapi.com/docs#tag/Products";

const Products = () => {
	const { data, error, loading } = useFetch(url);

	return (
		<>
			{loading && <span className={styles.loader}></span>}
			{error && <p>Error: {error}</p>}
			{data && (
				<div className={styles.itemList}>
					{data.products.map((product) => (
						<div className={styles.card} key={product.id}>
							<img
								className={styles.img}
								src={product.images[0]}
							/>
							<div className={styles.cardContent}>
								<p className={styles.title}>{product.title}</p>
								<p>{product.description}</p>
							</div>
							<div className={styles.pricing}>
								<p>${product.price}</p>
								<div className={styles.botonera}>
									<button>Buy!</button>
									<button>
										<ShoppingCart height={16} />
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Products;
