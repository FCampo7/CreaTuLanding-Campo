import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => setError(err))
			.finally(() => setLoading(false));
	}, [url]);

	return { data, error, loading };
};

export default useFetch;
