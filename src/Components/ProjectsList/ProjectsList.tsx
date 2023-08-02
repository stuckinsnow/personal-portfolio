import './ProjectsList.scss';
import projectData from '../../data/projects';
import { Link } from 'react-router-dom';

const ProjectsList: React.FC = () => {

    return (

        <div id="c-projects" className='projects'>
            {projectData.map((projectData, index) => (

                <section className="projects-card" key={index}>
                    <h3 className='projects-card__title'>
                        <Link className='projects-card__link' to={projectData.link} target='/'>
                            {projectData.name}
                        </Link>
                    </h3>

                    <img className='projects-card__image' src={projectData.image || 'missing'} alt={projectData.name} />

                    <div className='projects-card__group'>
                        <div className='projects-card__item--double'>{projectData.type} <span>{projectData.date}</span></div>
                        <div className='projects-card__item'>{projectData.desc}</div>
                        <div className='projects-card__item projects-card__tech'>
                            {projectData.technology.map((tech, index) => (
                                <span key={index} className={'projects-card__tech--list' + ' ' + 'projects-card__tech--' + tech.toLowerCase().replace(/[.\s]+/g, '-')} >{tech}</span>
                            ))}
                        </div>
                    </div>

                </section>
            ))}

        </div >
    );
};

export default ProjectsList;
