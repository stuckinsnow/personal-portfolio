import './ProjectsPage.scss';
import { useDocumentTitle } from '../../utils/functions';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';

const ProjectsPage: React.FC = () => {
    useDocumentTitle('Projects Page');


    return (
        <>
            <ProjectsList />
        </>
    )
};

export default ProjectsPage;