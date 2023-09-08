import { useDocumentTitle } from "../../utils/functions";
import ProjectsList from "../../Components/ProjectsList/ProjectsList";

import "./ProjectsPage.scss";
import { Link } from "react-router-dom";
// import Repositories from "../../Components/Repositories/Repositories";
import Contributions from "../../Components/Contributions/Contributions";

const ProjectsPage = () => {
	useDocumentTitle("Philip Lucas - Full Stack Web Developer")

	const tagLine: string = 'Please connect with me on linkedin';

	return (
		<>
			<div className="p-projectpage">


				<div className="p-projectpage__group">

					<section className="pp-card">

						<h1 className="pp-card__title">Philip Lucas</h1>
						<h2 className="pp-card__subtitle">Full-Stack Web Developer</h2>
						<p className="pp-card__description">{tagLine}</p>

					</section>

					<div className="pp-card pp-card__links">

						<p className="">
							<Link to="https://www.linkedin.com/in/lswr/" target="blank" className="pp-card__link">LinkedIn</Link>
						</p>
						<p className="">
							<Link to="https://github.com/stuckinsnow" target="blank" className="pp-card__link" >GitHub</Link>
						</p>
						<p className="">
							<Link to="https://leetcode.com/philiplucas/" target="blank" className="pp-card__link">Leetcode</Link>
						</p>

					</div>

					<div className="pp-card pp-card--contributions">
						<Contributions />
					</div>

				</div>

				<div className="pp-card about-philip">

					<section className="">
						<h2 className="about-philip__title" >Hello and welcome to my website!</h2>
					</section>

					<p className="about-philip__paragraph">
						I love creating something meaningful with others and being a part of something bigger than myself.
					</p>

					<p className="about-philip__paragraph">
						Web development has been an interest ever since buying my first HTML/CSS book as a child. Prior to intensively studying web development in 2023, I built WordPress themes, and tinkered around with code/scripts (I may have copied and pasted far too much PHP).
					</p>

					<p className="about-philip__paragraph">
						Over the years, I have learned a lot about hardware and operating systems. I helped improve the security at my previous job; I've built countless machines and set up numerous Linux/Windows servers, etc. but it was only until recently that I made the conscious decision to throw all of my energy at web development. I enjoy the idea of creation, whether that be a team, code or a photograph. Coding comes to me more naturally than photography did. That I learned in an attempt to prove to myself I could get good at something I was inherently bad at. I know that sounds crazy! Programming, I feel, is more what I was always meant to do.
					</p>

					<p className="about-philip__paragraph">
						I have lived in Canada for a little over a year now. I fell in love with North America at a young age, and having spent the vast majority of my life in England, I feel entirely grateful for this opportunity. It has been a dream finally come true! I have learned so much, not just through managing a team, or as a student but also culturally--especially in Vancouver and Calgary.
					</p>


				</div>
				<ProjectsList />
			</div>
		</>
	)
}

export default ProjectsPage
