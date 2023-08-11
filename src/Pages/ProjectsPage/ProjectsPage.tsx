import { useDocumentTitle, getUniqueTechnologies } from "../../utils/functions";
import ProjectsList from "../../Components/ProjectsList/ProjectsList";
import Contributions from "../../Components/Contributions/Contributions";

import "./ProjectsPage.scss";
import Repositories from "../../Components/Repositories/Repositories";

const ProjectsPage: React.FC = () => {
	useDocumentTitle("Projects Page")

	return (
		<>
			<div className="p-projectpage">
				<div className="p-projectpage__about-me">
					{/* <Contributions /> */}

					<Repositories />
				</div>

				<ProjectsList />
			</div>
		</>
	)
}

export default ProjectsPage
