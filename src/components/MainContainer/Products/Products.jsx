import { useEffect, useState } from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { ChevronsLeft, ChevronsRight, ShoppingCart } from "lucide-react";

import useFetch from "../../../hooks/useFetch";
import styles from "./Products.module.css";
import loader from "../../../css/loader.module.css";
import CategorySelector from "../../CategorySelector/CategorySelector";
import { useCart } from "../../../context/CartProvider";

// Limite de productos por pagina
const LIMIT = 16;

const Products = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [category, setCategory] = useState("");

	// Contexto del cart
	const { user, addToCart } = useCart();

	// Pagina y skip para el paginado, viene dado por los parámetros de la url
	const page = parseInt(searchParams.get("page") || "1", 10);
	const skip = (page - 1) * LIMIT;

	// Construcción dinámica de la URL de fetch
	let url = `https://dummyjson.com/products`;
	if (category) url += `/category/${category}`;
	url += `?limit=${LIMIT}&skip=${skip}`;

	// Fetch de los productos
	const { data, error, loading } = useFetch(url);

	// Navegación dinámica
	const nextPage = () => {
		const nextPageNum = page + 1;
		navigate(
			`/products?page=${nextPageNum}${
				category ? `&category=${category}` : ""
			}`
		);
	};

	const prevPage = () => {
		if (page > 1) {
			const prevPageNum = page - 1;
			navigate(
				`/products?page=${prevPageNum}${
					category ? `&category=${category}` : ""
				}`
			);
		}
	};

	useEffect(() => {
		navigate(`/products?page=1&category=${category}`);
	}, [category]);

	const handlerAddToCart = (product) => {
		if (user == null) {
			navigate("/login");
			return;
		}
		addToCart(product);
	};

	const BotonesPaginado = () => {
		return (
			<div className={styles.navPages}>
				{page > 1 && (
					<button style={{ width: "50px" }} onClick={prevPage}>
						<ChevronsLeft />
					</button>
				)}
				{page * LIMIT < data.total && (
					<button style={{ width: "50px" }} onClick={nextPage}>
						<ChevronsRight />
					</button>
				)}
			</div>
		);
	};

	return (
		<>
			{loading && <span className={loader.loader}></span>}
			{error && <p>Error: {error}</p>}
			{data && data.limit > 0 && (
				<>
					{/** filtro de categorías */}
					<CategorySelector onSelectCategory={setCategory} />

					{/** Botones de paginado */}
					<BotonesPaginado />

					{/** Tarjetas de los productos */}
					<div className={styles.itemList}>
						{data.products.map((product) => (
							<div className={styles.card} key={product.id}>
								<img
									className={styles.img}
									src={product.images[0]}
									alt={product.title}
								/>
								<div className={styles.cardContent}>
									<p className={styles.title}>
										{product.title}
									</p>
									<p className={styles.description}>
										{product.description}
									</p>
								</div>
								<div className={styles.pricing}>
									<p>${product.price}</p>
									<div className={styles.botonera}>
										<button className={styles.navLink} 
											onClick={() =>
												handlerAddToCart(product)
											}
										>
											<ShoppingCart height={16} />
										</button>
										<NavLink
											className={styles.navLink}
											to={`/details/${product.id}`}
										>
											View details
										</NavLink>
									</div>
								</div>
							</div>
						))}
					</div>

					{/** Botones de paginado */}
					<BotonesPaginado />
				</>
			)}
		</>
	);
};

export default Products;
