import { useState } from "react";
import "./App.css";
import CountryPage from "./components/CountryPage/CountryPage";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

	const [darkTheme, setDarkTheme] = useState(false)

	return (
		<BrowserRouter>
			<div className={`App ${darkTheme && "dark"}`}>
				<Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
				<Routes>
					<Route path="/countries-api" element={<Main />} />
					<Route
						path="/countries-api/:alpha3Code"
						element={<CountryPage />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
