import "./Header.css";
import { HiOutlineMoon } from "react-icons/hi";
import { HiOutlineSun } from "react-icons/hi";

const Header = ({darkTheme, setDarkTheme}) => {
	return (
		<div className="header-w">
			<header>
				<h1>Where in the world?</h1>
				<div onClick={() => setDarkTheme(!darkTheme)} className="toggle-theme">
					{!darkTheme ? <HiOutlineMoon /> : <HiOutlineSun />}
					<span>{darkTheme ? 'Light' : 'Dark'} Mode</span>
				</div>
			</header>
		</div>
	);
};

export default Header;
