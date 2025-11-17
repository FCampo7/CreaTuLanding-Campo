import { useState } from "react";
import { auth, db } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import styles from "./SignUp.module.css";

export default function SignUp() {
	const [form, setForm] = useState({
		name: "",
		lastName: "",
		email: "",
		phone: "",
		address: "",
		password: "",
	});

	const [errors, setErrors] = useState({});
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);

	const validate = () => {
		const newErrors = {};

		if (!form.name.trim()) newErrors.name = "El nombre es obligatorio";
		if (!form.lastName.trim())
			newErrors.lastName = "El apellido es obligatorio";
		if (!form.email.includes("@")) newErrors.email = "Email inválido";
		if (form.phone.length < 10) newErrors.phone = "Teléfono inválido";
		if (form.address.length < 5) newErrors.address = "Dirección inválida";
		if (form.password.length < 6)
			newErrors.password = "La contraseña debe tener mínimo 6 caracteres";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validate()) return;
		setLoading(true);

		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				form.email,
				form.password
			);

			await setDoc(doc(db, "users", res.user.uid), {
				...form,
				rol: "user",
				createdAt: serverTimestamp(),
			});

			setSuccess(true);
		} catch (err) {
			setErrors({ global: err.message });
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h2 className={styles.title}>New Account</h2>

				<input
					name="name"
					placeholder="Name"
					value={form.name}
					onChange={handleChange}
					className={errors.name ? styles.inputError : styles.input}
				/>
				{errors.name && <p className={styles.error}>{errors.name}</p>}

				<input
					name="lastName"
					placeholder="Last Name"
					value={form.lastName}
					onChange={handleChange}
					className={
						errors.lastName ? styles.inputError : styles.input
					}
				/>
				{errors.lastName && (
					<p className={styles.error}>{errors.lastName}</p>
				)}

				<input
					name="email"
					type="email"
					placeholder="Email"
					value={form.email}
					onChange={handleChange}
					className={errors.email ? styles.inputError : styles.input}
				/>
				{errors.email && <p className={styles.error}>{errors.email}</p>}

				<input
					name="phone"
					placeholder="Phone"
					value={form.phone}
					onChange={handleChange}
					className={errors.phone ? styles.inputError : styles.input}
				/>
				{errors.phone && <p className={styles.error}>{errors.phone}</p>}

				<input
					name="address"
					placeholder="Address"
					value={form.address}
					onChange={handleChange}
					className={
						errors.address ? styles.inputError : styles.input
					}
				/>
				{errors.address && (
					<p className={styles.error}>{errors.address}</p>
				)}

				<input
					name="password"
					type="password"
					placeholder="Password"
					value={form.password}
					onChange={handleChange}
					className={
						errors.password ? styles.inputError : styles.input
					}
				/>
				{errors.password && (
					<p className={styles.error}>{errors.password}</p>
				)}

				<button disabled={loading} className={styles.button}>
					{loading ? "Signing Up..." : "Sign Up"}
				</button>

				{errors.global && (
					<p className={styles.error}>{errors.global}</p>
				)}
				{success && (
					<p className={styles.success}>
						Account created successfully!
					</p>
				)}
			</form>
		</div>
	);
}
