import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
import { Link } from 'react-router-dom';
import Contributions from '../../Components/Contributions/Contributions';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');

  return (
    <div id="main">
      <div id="profile">
        <section className="info">
          <h1 className="info__title">Name Here</h1>
          <h2 className="info__subtitle">Full-Stack Web Developer</h2>
          <p className="info__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita voluptate ratione nisi, libero earum ut ducimus inventore velit optio! Expedita.</p>

          <Contributions />
        </section>

        {/* <div className="links">
          <Link to="/projects" className="links__link">Projects</Link>
          <Link to="/about" className="links__link">About</Link>
        </div> */}

      </div>

    </div>
  );
};

export default HomePage;
