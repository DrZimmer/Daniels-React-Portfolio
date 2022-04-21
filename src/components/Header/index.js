import React from "react";
import Nav from "../Nav";
import logo from '../../assets/images/DZlogo.jpg';
import '../../index.css'

function Header(props) {
	const { currentPage, setcurrentPage } = props;

	return (
		<header>
			<div>
            <img src={logo} className="my-2" style={{ width: "250px", margin: "10px" }} alt="dz-logo" />
			</div>
			<div>
				<Nav
					currentPage={currentPage}
					setcurrentPage={setcurrentPage}
				></Nav>
			</div>
		</header>
	);
}

export default Header;