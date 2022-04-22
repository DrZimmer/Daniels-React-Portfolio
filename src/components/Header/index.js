import React from "react";
import Nav from "../Nav";
import logo from '../../assets/images/DZlogo.jpg';

function Header(props) {
	const { currentTab, setCurrentTab } = props;

	return (
		<header>
			<div>
            <img src={logo} className="my-2" style={{ width: "250px", margin: "10px" }} alt="tb-logo" />
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