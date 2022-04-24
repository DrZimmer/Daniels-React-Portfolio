import React from "react";
import Nav from "../Nav";
import logo from '../../assets/images/DZlogo.jpg';

function Header(props) {
	const { currentPage, setCurrentPage } = props;

	return (
		<header className="colors">
			<div className="colors">
        <img src={logo} className="my-2 colors" style={{ width: "250px", margin: "10px" }} alt="DZ logo" />
				<div className="dzname">Daniel Zimmermann</div>
			</div>
			<div>
				<Nav
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				></Nav>
			</div>
		</header>
	);
}

export default Header;