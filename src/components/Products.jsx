import useFetch from "../hooks/useFetch";

const url =
	"https://dummyjson.com/products/category/womens-jewellery/?limit=10";

const url2 = "https://fakestoreapi.com/docs#tag/Products";

const Products = () => {
	const { data, error, loading } = useFetch(url);

	return (
		<>
			<h1>Productos:</h1>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{data && (
				<ul>
					{data.products.map((product) => (
						<li key={product.id}>{product.title}</li>
					))}
				</ul>
			)}
		</>
	);
};

export default Products;
