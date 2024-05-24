import "./CountryCard.css";
import { Link } from "react-router-dom";

const CountryCard = ({
	code,
	flag,
	name,
	population,
	region,
	capital
}) => {
	return (
		<Link to={`/countries-api/${code}`} className="card-link">
			<div className="country-w">
				<img src={flag} alt={name} />
				<div className="country-text">
					<h2>{name}</h2>
					<p>
						<strong>Population:</strong> {population}
					</p>
					<p>
						<strong>Region:</strong> {region}
					</p>
					<p>
						<strong>Capital:</strong> {capital}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CountryCard;
