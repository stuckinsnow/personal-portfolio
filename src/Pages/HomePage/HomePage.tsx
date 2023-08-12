import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
import { Link } from 'react-router-dom';
import Contributions from '../../Components/Contributions/Contributions';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';

const HomePage = () => {
  useDocumentTitle('Home Page');

  return (
    <div id="main">
      <div id="profile">


        <section className="info">
          <Link className='info__link' to="/projects">
            <h1 className="info__title">Philip L</h1>
            <h2 className="info__subtitle">Full-Stack Web Developer</h2>
            {/* <p className="info__description">Develop. Determination. Deliver.</p> */}

            <Contributions />

          </Link>
        </section>


      </div>
    </div>
  );
};

export default HomePage;
