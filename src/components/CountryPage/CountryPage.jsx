import "./CountryPage.css";
import data from "../../data/data";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CountryPage = () => {
	const code = useParams();
	const country = data.find(country => country.alpha3Code === code.alpha3Code);

	const [borders, setBorders] = useState([]);

	const bordersAbb = () => {
		if (country.borders) {
			setBorders(
				country.borders.map(border =>
					data.find(country => country.alpha3Code === border)
				)
			);
		}
	};

	useEffect(() => {
		bordersAbb();
	}, [borders]);

	return (
		<div className="country-page">
			<Link to={"/react-countries-api"}>
				<button>
					<FaArrowLeftLong /> Back
				</button>
			</Link>
			<div className="country">
				<img src={country.flags.svg} alt={country.name} />
				<div className="country-details">
					<h2>{country.name}</h2>
					<div className="country-desc1">
						<p>
							<strong>Native Name:</strong> {country.nativeName}
						</p>
						<p>
							<strong>Population:</strong>{" "}
							{country.population.toLocaleString("en-US")}
						</p>
						<p>
							<strong>Region:</strong> {country.region}
						</p>
						<p>
							<strong>Sub Region:</strong> {country.subregion}
						</p>
						<p>
							<strong>Capital:</strong> {country.capital}
						</p>
					</div>
					<div className="country-desc2">
						<p>
							<strong>Top Level Domain:</strong> {country.topLevelDomain}
						</p>
						<p>
							<strong>Currencies:</strong>{" "}
							{country.currencies.map(curr => curr.name)}
						</p>
						<p>
							<strong>Languages:</strong>{" "}
							{country.languages.map(lang => lang.name)}
						</p>
					</div>
					<div className="country-desc3">
						<h3>Border Countries</h3>
						<div className="border-countries">
							{borders.map(border => (
								<Link to={`/react-countries-api/${border.alpha3Code}`}>
									<span>{border.name.split(" ")[0]}</span>
								</Link>
							))}
							{borders.length === 0 && <span>Border countries not found.</span>}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountryPage;
