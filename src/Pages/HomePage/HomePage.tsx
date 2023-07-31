import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
import Contributions from '../../Components/Contributions/Contributions';
import Repositories from '../../Components/Repositories/Repositories';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');



  return (
    <>

      <div id="main">

        <div id="profile">
          <section className="info">
            <h1 className="info__title">Philip Lucas</h1>
            <h2 className="info__subtitle">Full-Stack Web Developer</h2>
            <p className="info__description">I build modern websites with user interaction and efficiency in mind.</p>
          </section>
        </div>

        <div>
          <Contributions />
          <Repositories />
        </div>


      </div>


    </>
  );
};

export default HomePage;
