import { useEffect, useState } from "react";

const FetchProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(
			"https://dummyjson.com/products/category/womens-jewellery/?limit=10"
		)
			.then((res) => res.json())
			.then((data) => setProducts(data.products))
			.catch((error) => console.error("Error:", error));
	}, []);

	return (
		<>
			<h3>Productos</h3>
			<ul>
				{products.map((product) => (
					<li key={product.id}>{product.title}</li>
				))}
			</ul>
		</>
	);
};

export default FetchProducts;
