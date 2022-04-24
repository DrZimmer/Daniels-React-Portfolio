import React from "react";
import Nav from "../Nav";
import logo from '../../assets/images/DZlogo.jpg';

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header className="colors">
			<div className="colors">
        <img src={logo} className="my-2 colors" style={{ width: "250px", margin: "10px" }} alt="tb-logo" />
				<div className="dzname">Daniel Zimmermann</div>
			</div>
			<div>
				<Nav
					currentTab={currentTab}
					setCurrentTab={setCurrentTab}
				></Nav>
			</div>
		</header>
	);
}

export default Header;