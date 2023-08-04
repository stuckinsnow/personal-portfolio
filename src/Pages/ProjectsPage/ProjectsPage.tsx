import './ProjectsPage.scss';
import { useDocumentTitle } from '../../utils/functions';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';
import Contributions from '../../Components/Contributions/Contributions';

const ProjectsPage: React.FC = () => {
    useDocumentTitle('Projects Page');


    return (
        <>
            <Contributions />
            <ProjectsList />
        </>
    )
};

export default ProjectsPage;