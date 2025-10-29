import NavContainer from "./components/NavContainer/NavContainer.jsx";
import MainContainer from "./components/MainContainer/MainContainer.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ItemListContainer from "./components/MainContainer/ItemListContainer/ItemListContainer.jsx";

function App() {
	return (
		<BrowserRouter>
			<NavContainer />
			<Routes>
				<Route path="/" element={<MainContainer />} />
				<Route path="/products" element={<ItemListContainer />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
