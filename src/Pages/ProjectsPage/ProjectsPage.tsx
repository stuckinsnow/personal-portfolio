import { useDocumentTitle } from "../../utils/functions";
import ProjectsList from "../../Components/ProjectsList/ProjectsList";

import "./ProjectsPage.scss";
import { Link } from "react-router-dom";
import Repositories from "../../Components/Repositories/Repositories";

const ProjectsPage = () => {
	useDocumentTitle("Projects Page")

	return (
		<>
			<div className="p-projectpage">


				<div className="p-projectpage__group">

					<div className="pp-card">
						<p className="pp-card__home"><Link to="/" className="pp-card__link--home">
							Home
						</Link>
						</p>
					</div>

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

					{/* <div className="pp-card">

						<section className="">
							<h1 className="">About</h1>
							<p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate ratione nisi, libero earum ut ducimus inventore velit optio! Expedita.</p>

						</section>

						<h2 className="pp-card__title" >Title</h2>

						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, alias. Deserunt quod veniam accusamus aliquid laborum, enim reiciendis distinctio dolor quibusdam earum eum soluta! Nostrum quibusdam atque eum amet, eaque non officia fugiat cumque. Recusandae tempore illum impedit est molestias voluptatibus dolorem itaque maiores dicta eum. Nam, laudantium, dolorum iure maxime quo magnam sapiente, molestias ullam maiores amet et non at. Aliquam minima facere mollitia officia adipisci repellat dolor libero provident. Nulla asperiores iure facere soluta assumenda quos nihil omnis.

					</div> */}

					<div className="pp-card">
						<Repositories />
					</div>

				</div>


				<ProjectsList />
			</div>
		</>
	)
}

export default ProjectsPage
