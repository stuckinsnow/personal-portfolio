// ProjectsList.tsx
import "./ProjectsList.scss"
import projectData from "../../data/projects"
import { Link } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import { toggleActiveClass, handleActiveProject } from "../../utils/animations" // Corrected import path

interface ProjectData {
	link: string
	name: string
	type: string
	date: string
	image: string
	desc: string
	technology: string[]
}

const ProjectsList: React.FC = () => {
	const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
	const activeProjectRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		handleActiveProject(activeProjectRef, activeProjectIndex)
	}, [activeProjectIndex, activeProjectRef])

	return (
		<div id="c-projects" className="projects">
			{projectData.map((project: ProjectData, index: number) => (
				<div
					ref={activeProjectIndex === index ? activeProjectRef : null}
					className={`projects-card ${activeProjectIndex === index ? "active expanded" : ""}`}
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
							<Link className="projects-title-bar__link" to={project.link} target="/">
								{project.name}
							</Link>
						</h3>
						<p className="projects-title-bar__group">
							<span className="projects-title-bar__group--type">{project.type}</span>
							<span className="projects-title-bar__group--date">{project.date}</span>
						</p>
					</section>
					<img className="projects-card__image" src={project.image || "missing"} alt={project.name} />
					<p className="projects-card__description">{project.desc}</p>
					<div className={`projects-card__item projects-card__tech ${activeProjectIndex === index ? "active" : ""}`}>
						{project.technology.map((tech, index) => (
							<span key={index} className={"projects-card__tech--list-item" + " " + "projects-card__tech--" + tech.toLowerCase().replace(/[.\s]+/g, "-")}>
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
