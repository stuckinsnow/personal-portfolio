import './ProjectsList.scss';
import projectData from '../../data/projects';
import { Link } from 'react-router-dom';

const ProjectsList: React.FC = () => {
    return (

        <div id="c-projects" className='c-projects'>
            {projectData.map((projectData, index) => (

                <div className="projects-card" key={index}>

                    <div className='projects-card__group'>
                        <Link className='projects-card__item projects-card__link' to={projectData.link} target='/'><h3 className='projects-card__link--title'>{projectData.name}</h3></Link>
                        <div className='projects-card__item--double'>{projectData.type} <span>{projectData.date}</span></div>
                        <div className='projects-card__item'>{projectData.desc}</div>
                        <div className='projects-card__item'>{projectData.technology.join(", ")}</div>
                    </div>

                    <img className='projects-card__image' src={projectData.image || 'missing'} alt={projectData.name} />
                </div>
            ))}

        </div >
    );
};

export default ProjectsList;
