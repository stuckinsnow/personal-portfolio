import './ProjectsPage.scss';
import { useDocumentTitle } from '../../utils/functions';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';
import Contributions from '../../Components/Contributions/Contributions';

const ProjectsPage: React.FC = () => {
    useDocumentTitle('Projects Page');


    return (
        <>
            <div className="p-projectpage">

                <section className="about-me">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maiores, quibusdam repellendus distinctio dolores molestias ipsam corrupti amet. Sequi quam modi, nisi recusandae veritatis voluptatem autem omnis dicta debitis ratione earum neque, et ut necessitatibus fuga doloremque illum deserunt voluptatibus dolorum error corrupti animi doloribus? Repellendus molestiae at esse, eum aliquam eligendi alias illo enim hic ducimus eveniet quam adipisci atque id deleniti! Molestiae blanditiis ad suscipit hic aspernatur beatae tempore exercitationem aut porro placeat, consequuntur animi commodi in architecto, sapiente culpa tenetur iusto, iure ullam perferendis officiis repudiandae eligendi! Praesentium perferendis est cum repellat similique dignissimos, at corrupti consequuntur?

                    {/* <Contributions /> */}
                </section>

                <ProjectsList />
            </div>
        </>
    )
};

export default ProjectsPage;