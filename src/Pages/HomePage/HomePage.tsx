import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
// import { animateButton } from '../../utils/elements';
import Contributions from '../../Components/Contributions/Contributions';
import Repositories from '../../Components/Repositories/Repositories';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');

  return (
    <>

      <div id="portfolio-left">
        <section className="info">
          <h1 className="info__title">Philip Lucas</h1>
          <h2 className="info__subtitle">Full-Stack Web Developer</h2>
          <p className="info__description">I build modern websites with user interaction and efficiency in mind.</p>
        </section>
      </div>

      <Contributions />

      <Repositories />
    </>
  );
};

export default HomePage;
