import { useDocumentTitle, getUniqueTechnologies } from "../../utils/functions";
import ProjectsList from "../../Components/ProjectsList/ProjectsList";
import Contributions from "../../Components/Contributions/Contributions";
import projectData from "../../data/projects"; 

import "./ProjectsPage.scss";

const ProjectsPage: React.FC = () => {
	useDocumentTitle("Projects Page")

	const uniqueTechnologyList: string[] = getUniqueTechnologies(projectData)

	return (
		<>
			<div className="p-projectpage">
				<div className="p-projectpage__about-me">
                    <Contributions />
					<section className="p-projectpage__technologies">
                        <h1 className="p-projectpage__title">
                            Technologies Used
                        </h1>
						{uniqueTechnologyList
							// .slice() commented as it doesn't matter if original array is mutated
							.sort((a, b) => a.localeCompare(b)) 
							.map((tech, index) => (
								<span key={index} className={"tech-label tech-label--" + tech.toLowerCase().replace(/[.\s]+/g, "-")}>
									{tech}
								</span>
							))}
					</section>
				</div>

				<ProjectsList />
			</div>
		</>
	)
}

export default ProjectsPage
