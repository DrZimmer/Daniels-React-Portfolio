import React from "react";

function Resume() {
	return (
		<section>
			<div className="center">
				<h1 className="page-header" style={{ textDecoration:"underline" }}>My Resume</h1>
			</div>
			<div className="bottom-spacing" style={{ textAlign: "center" }}>
                <a target="_blank" rel="noopener noreferrer" href={("https://ucarecdn.com/07e33b70-df75-4245-a0e1-218ad5664ce2/ThomBurtResume.pdf")} >
					<h4 style={{ textDecoration:"underline" }}>View my Resume by Clicking here!</h4>
				</a>
                <a href={require("../../assets/materials/Resume.pdf")} download>
					<h4 style={{ textDecoration:"underline" }}>Download my Resume by Clicking here!</h4>
				</a>
			</div>
			
		</section>
	);
}

export default Resume;
