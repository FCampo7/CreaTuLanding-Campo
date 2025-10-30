import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import loader from "../../../css/loader.module.css";
import styles from "./Details.module.css";
import { Star } from "lucide-react";

const Rating = ({ value, max = 5 }) => {
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
			{value}
			{stars}
		</div>
	);
};

const Details = () => {
	const params = useParams();
	const { data, error, loading } = useFetch(
		`https://dummyjson.com/products/${params.productId}`
	);

	return (
		<div className={styles.divContainer}>
			{loading && <span className={loader.loader}></span>}
			{error && <p>Error: {error}</p>}
			{data && (
				<div>
					<h1>{data.title}</h1>
					<h3>{data.category}</h3>
					<Rating value={data.rating} />
					<img height={400} src={data.images[0]}></img>
					<p>{data.description}</p>
					<p>${data.price}</p>
				</div>
			)}
		</div>
	);
};

export default Details;
