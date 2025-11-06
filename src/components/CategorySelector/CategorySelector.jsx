import { useEffect, useState } from "react";
import styles from "./CategorySelector.module.css";

const CategorySelector = ({ onSelectCategory }) => {
	const [categories, setCategories] = useState([]);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await fetch(
					"https://dummyjson.com/products/categories"
				);
				const data = await res.json();
				setCategories(data);
			} catch (err) {
				console.error("Error al cargar categorías:", err);
			}
		};
		fetchCategories();
	}, []);

	const handleChange = (e) => {
		const value = e.target.value;
		setSelected(value);
		onSelectCategory(value);
	};

	return (
		<div className={styles.pickerContainer}>
			<label htmlFor="category" className={styles.label}>
				Filter by categories:
			</label>
			<select
				id="category"
				value={selected}
				onChange={handleChange}
				className={styles.select}
			>
				<option value="">All</option>
				{categories.map((cat) => (
					<option key={cat.slug} value={cat.slug}>
						{cat.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default CategorySelector;
