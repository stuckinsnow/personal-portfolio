import './ProjectsList.scss';
import projectData from '../../data/projects';

interface ProjectData {
    date: string;
    name: string;
    type: string;
    technology: string[];
    link: string;
    desc: string;
    image: string;
}

const ProjectsList: React.FC = () => {
    return (
        <table className="projects-table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Technology</th>
                    <th className='projects-table__link'>Link</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {projectData.map((projectData, index) => (
                    <tr key={index}>
                        <td>{projectData.date}</td>
                        <td>{projectData.name}</td>
                        <td>{projectData.type}</td>
                        <td>{projectData.technology.join(", ")}</td>
                        <td className='projects-table__link'><a href={projectData.link} target="_blank" rel="noopener noreferrer">{projectData.link}</a></td>
                        <td>{projectData.desc}</td>
                        <td><img className='projects-table__image' src={projectData.image} alt={projectData.name} /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default ProjectsList;
