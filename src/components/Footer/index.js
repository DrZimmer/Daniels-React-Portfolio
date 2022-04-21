import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '../../index.css'

function Footer() {

  return (
		<footer className="container">
			<div>
                <a href="https://github.com/DrZimmer">
                <FontAwesomeIcon icon={faGithub} className="icons"></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/daniel-robert-zimmermann/">
                <FontAwesomeIcon icon={faLinkedin} className="icons"></FontAwesomeIcon>
                </a>
                <a href="https://twitter.com/Dr_Zimmm">
                <FontAwesomeIcon icon={faTwitter} className="icons"></FontAwesomeIcon>
                </a>
			</div>
		</footer>
	);
}

export default Footer;