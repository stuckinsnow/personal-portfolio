import './ProjectsList.scss';
import projectData from '../../data/projects';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

interface ProjectData {
    link: string;
    name: string;
    type: string;
    date: string;
    image: string;
    desc: string;
    technology: string[];
}

const ProjectsList: React.FC = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
    const activeProjectRef = useRef<HTMLDivElement>(null);
    const defaultHeight = '3rem';

    const toggleActiveClass = (index: number) => {
        setActiveProjectIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        if (activeProjectRef.current && activeProjectIndex !== null) {
            const activeDiv = activeProjectRef.current;
            const dataIndex = parseInt(activeDiv.dataset.index || '');
            if (activeProjectIndex === dataIndex) {
                // Calculate the actual height of the content and set it rather than an "auto" value--auto values don't allow transitions, and "max-height" has problems of its own e.g. if the actual height is 10rem but max-height is set to 100rem, the transition will be off for the remaining 90rem
                const height = activeDiv.scrollHeight;
                activeDiv.style.maxHeight = `${height}px`;
                activeDiv.classList.add('expanded');
            } else {
                activeDiv.style.maxHeight = defaultHeight;
                activeDiv.classList.remove('expanded');
            }
        }
    }, [activeProjectIndex]);

    return (
        <div id="c-projects" className="projects">
            {projectData.map((project: ProjectData, index: number) => (
                <div
                    ref={activeProjectIndex === index ? activeProjectRef : null}
                    className={`projects-card ${activeProjectIndex === index ? 'active expanded' : ''}`}
                    style={{ maxHeight: activeProjectIndex === index ? activeProjectRef.current?.scrollHeight + 'px' : defaultHeight }}
                    data-index={index}
                    key={index}
                    onClick={() => toggleActiveClass(index)}
                >
                    <section className="projects-title-bar">
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
                    <img className="projects-card__image" src={project.image || 'missing'} alt={project.name} />
                    <p className="projects-card__description">{project.desc}</p>
                    <div className={`projects-card__item projects-card__tech ${activeProjectIndex === index ? 'active' : ''}`}>
                        {project.technology.map((tech, index) => (
                            <span key={index} className={'projects-card__tech--list-item' + ' ' + 'projects-card__tech--' + tech.toLowerCase().replace(/[.\s]+/g, '-')}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;
