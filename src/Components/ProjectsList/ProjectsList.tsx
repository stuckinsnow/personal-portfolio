// ProjectsList.tsx
import "./ProjectsList.scss"
import projectData from "../../data/projects"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { toggleActiveClass, handleActiveProject } from "../../utils/animations" // Corrected import path
import { getUniqueTechnologies } from "../../utils/functions";
// import Repositories from "../Repositories/Repositories"
import Contributions from "../Contributions/Contributions";
const uniqueTechnologyList: string[] = getUniqueTechnologies(projectData)

interface ProjectData {
	link: string
	hostlink: string
	name: string
	type: string
	date: string
	image: string
	desc: string
	technology: string[]
}

const ProjectsList = () => {
	const [activeProjectIndex, setActiveProjectIndex] = useState<null>(null); // Change the initial state to 0
	const [activeTechnology, setActiveTechnology] = useState<null>(null);
	const activeProjectRef = useRef<HTMLDivElement>(null);
	const activeTechnologyRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		handleActiveProject(activeProjectRef, activeProjectIndex)
		handleActiveProject(activeTechnologyRef, activeTechnology)
	}, [activeProjectIndex, activeProjectRef, activeTechnology, activeTechnologyRef])

	return (
		<div id="c-projects" className="projects">


			<Contributions />




			{/* <section className="component-header">
				<h2 className="component-header__title">
					Projects
				</h2></section> */}

			{/* <h2 className="p-projectpage__title">
				Projects
			</h2> */}

			<div className="p-projectpage__technologies hidden-mobile">

				{/* <h2 className="p-projectpage__title">
	All Projects
</h2> */}

				<div
					ref={activeTechnology === 1 ? activeTechnologyRef : null}
					className={`pl-card pl-card-2 ${activeTechnology === 1 ? "expanded" : ""}`}
					style={{
						maxHeight: activeTechnology === 1 ? activeTechnologyRef.current?.scrollHeight + "px" : "",
					}}
					data-index={1}
					key={1}
					onClick={() => toggleActiveClass(1, setActiveTechnology)}
				>

					<span className="technology-list__item technology-list__item--all">Projects & Technologies</span>
					{uniqueTechnologyList
						.sort((a, b) => a.localeCompare(b))
						.map((tech, index) => (
							<span key={index} className={"technology-list__item technology-list__item--" + tech.toLowerCase().replace(/[.\s]+/g, "-")}>
								{tech}
							</span>
						))}

				</div>
			</div>

			{projectData.map((project: ProjectData, index: number) => (
				<div
					ref={activeProjectIndex === index ? activeProjectRef : null}
					className={`pl-card ${activeProjectIndex === index ? "expanded" : ""}`}
					style={{
						maxHeight: activeProjectIndex === index ? activeProjectRef.current?.scrollHeight + "px" : "",
					}}
					data-index={index}
					key={index}
					onClick={() => toggleActiveClass(index, setActiveProjectIndex)}
				>
					<section className="projects-title-bar">
						{" "}
						<h3 className="projects-title-bar__head">
							{project.name}
						</h3>
						<p className="projects-title-bar__group">
							<span className="projects-title-bar__group--type">{project.type}</span>
							<span className="projects-title-bar__group--date">{project.date}</span>
						</p>
					</section>
					<img className="pl-card__image" src={project.image || "missing"} alt={project.name} />
					<p className="pl-card__description">{project.desc}</p>

					<div className="pl-card-links">
						<p className="pl-card-links--left hidden-mobile"><Link className="pl-card-links__link" to={project.link} target="blank">GitHub</Link></p>
						<p className="pl-card-links--right"><Link className="pl-card-links__link" to={project.hostlink} target="blank">HostLink</Link></p>
					</div>


					<div className={`technology-list ${activeProjectIndex === index ? "active" : ""}`}>
						{project.technology
							.sort((a, b) => a.localeCompare(b))
							.map((tech, index) => (
								<span
									key={index}
									className={`technology-list__item technology-list__item--${tech.toLowerCase().replace(/[.\s]+/g, "-")}`}>
									{tech}
								</span>
							))}
					</div>
				</div>
			))}


		</div>
	)

}

export default ProjectsList
