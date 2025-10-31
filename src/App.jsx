import NavContainer from "./components/NavContainer/NavContainer.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/MainContainer/ItemListContainer/ItemListContainer.jsx";
import Details from "./components/MainContainer/Details/Details.jsx";
import Page404 from "./components/MainContainer/Page404/Page404.jsx";

function App() {
	return (
		<BrowserRouter>
			<NavContainer />
			<Routes>
				<Route path="/" element={<MainContainer />} />
				<Route path="/products" element={<ItemListContainer />} />
				<Route path="/details/:productId" element={<Details />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
