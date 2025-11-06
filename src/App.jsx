import NavContainer from "./components/NavContainer/NavContainer.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/MainContainer/ItemListContainer/ItemListContainer.jsx";
import Details from "./components/MainContainer/Details/Details.jsx";
import Page404 from "./components/MainContainer/Page404/Page404.jsx";
import CartProvider from "./context/CartProvider.jsx";

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<NavContainer />
				<Routes>
					<Route path="/" element={<MainContainer />} />
					<Route path="/products" element={<ItemListContainer />} />
					<Route path="/details/:productId" element={<Details />} />
					<Route path="*" element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;
