import './ProjectsList.scss';
import projectData from '../../data/projects';
import { Link } from 'react-router-dom';

const ProjectsList: React.FC = () => {

    return (

        <div id="c-projects" className='projects'>
            {projectData.map((projectData, index) => (

                <div className="projects-card" key={index}>

                    <section className="projects-title-bar">
                        <h3 className='projects-title-bar__head'>
                            <Link className='projects-title-bar__link' to={projectData.link} target='/'>
                                {projectData.name}
                            </Link>
                        </h3>

                        <p className='projects-title-bar__group'>
                            <span className="projects-title-bar__group--type">
                                {projectData.type}
                            </span>
                            <span className="projects-title-bar__group--date">
                                {projectData.date}
                            </span>
                        </p>
                    </section>


                    <img className='projects-card__image' src={projectData.image || 'missing'} alt={projectData.name} />
                    <p className='projects-card__description'>{projectData.desc}</p>

                    <div className='projects-card__item projects-card__tech'>
                        {projectData.technology.map((tech, index) => (
                            <span key={index} className={'projects-card__tech--list-item' + ' ' + 'projects-card__tech--' + tech.toLowerCase().replace(/[.\s]+/g, '-')} >{tech}</span>
                        ))}
                    </div>

                </div>
            ))}

        </div >
    );
};

export default ProjectsList;