import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import './index.css';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState("about");

  const page = () => {
		switch (currentPage) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};


  return (
		<div>
			<div className="mobile-header">
				<Header currentPage={currentPage} setCurrentPage={setCurrentPage}></Header>
			</div>
			<div>
				<main>{page()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
