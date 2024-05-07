import CountryCard from "../CountryCard/CountryCard";
import "./Main.css";
import { IoIosSearch } from "react-icons/io";
import data from "../../data/data";
import { useState } from "react";

const Main = () => {
	const [region, setRegion] = useState("All");
	const [search, setSearch] = useState("");

	return (
		<main>
			<div className="main-header">
				<label htmlFor="search">
					<IoIosSearch className="search-icon" />
					<input
						type="text"
						name="search"
						id="search"
						placeholder="Search for a country..."
						onChange={e => setSearch(e.target.value)}
					/>
				</label>
				<select
					onChange={e => setRegion(e.target.value)}
					name="filter"
					id="filter"
				>
					<option value="region" disabled>
						Filter by Region
					</option>
					<option value="All">All</option>
					<option value="Africa">Africa</option>
					<option value="Americas">America</option>
					<option value="Asia">Asia</option>
					<option value="Europe">Europe</option>
					<option value="Oceania">Oceania</option>
				</select>
			</div>

			<div className="countries-container">
				{data
					.filter(country =>
						country.name.toLowerCase().includes(search.toLowerCase())
					)
					.filter(country => {
						if (region === "All") {
							return country;
						}
						return country.region === region;
					})
					.map(country => (
						<CountryCard
							key={country.name}
							code={country.alpha3Code}
							flag={country.flags.svg}
							name={country.name}
							population={country.population.toLocaleString("en-US")}
							region={country.region}
							capital={country.capital}
						/>
					))}
			</div>
		</main>
	);
};

export default Main;
