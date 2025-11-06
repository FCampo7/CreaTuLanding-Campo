import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import loader from "../../../css/loader.module.css";
import styles from "./Details.module.css";
import { ShoppingCart, Star, Undo2 } from "lucide-react";
import { useCart } from "../../../context/CartProvider";

// Rating de estrellas
const Rating = ({ value, max = 5, showValue = true }) => {
	const stars = [];

	for (let i = 1; i <= max; i++) {
		stars.push(
			<Star
				key={i}
				size={20}
				fill={i <= value ? "gold" : "none"}
				stroke="gold"
			/>
		);
	}

	return (
		<div style={{ display: "flex", gap: "4px" }}>
			{showValue && <strong>{value}</strong>}
			{stars}
		</div>
	);
};

// Componente de las reviews del producto
const Review = ({ review }) => {
	return (
		<div key={review.id} className={styles.reviewCard}>
			<div className={styles.reviewHeader}>
				<p className={styles.reviewerName}>{review.reviewerName}</p>
				<Rating value={review.rating} showValue={false} />
			</div>
			<p className={styles.comment}>{review.comment}</p>
		</div>
	);
};

// Componente de detalles del producto
const Details = () => {
	const navigate = useNavigate();
	const params = useParams();
	const { data, error, loading } = useFetch(
		`https://dummyjson.com/products/${params.productId}`
	);
	const { addToCart } = useCart();

	return (
		<div className={styles.divContainer}>
			{loading && <span className={loader.loader}></span>}
			{error && <p>Error: {error}</p>}
			{data && (
				<div>
					<div className={styles.productDetails}>
						<Undo2
							style={{
								alignSelf: "flex-start",
								cursor: "pointer",
							}}
							onClick={() => navigate(-1)}
						/>
						<h1>{data.title}</h1>
						<h3>{data.category}</h3>

						<div className={styles.rowContainer}>
							<img src={data.images[0]} alt={data.title} />
							<div className={styles.detailsContainer}>
								<Rating value={data.rating} />
								<p>{data.description}</p>
								<p className={styles.priceTag}>
									<strong>Price:</strong> ${data.price}
								</p>
								<button onClick={() => addToCart(data)}>
									<ShoppingCart size={16} />
									<span> Add to Cart!</span>
								</button>
							</div>
						</div>
					</div>

					{/** Componente de reviews */}
					<div className={styles.reviewsContainer}>
						{data.reviews.map((review) => (
							<Review review={review} />
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Details;
