import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
import { animateButton } from '../../utils/elements';
import Contributions from '../../Components/Contributions/Contributions';
import Repositories from '../../Components/Repositories/Repositories';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');

  return (
    <>
      <div className='divider'>
        <span className="dividerd"></span>
        <ul className="fun">
          <li className="fun__item" onClick={animateButton}>01</li>
          <li className="fun__item" onClick={animateButton}>02</li>
          <li className="fun__item" onClick={animateButton}>03</li>
          <li className="fun__item" onClick={animateButton}>04</li>
        </ul>

        <p className="font writing-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi iusto praesentium odit iure omnis hic fugiat ipsum ad nihil deserunt officiis nisi laborum nesciunt impedit deleniti optio ea adipisci voluptatem, inventore ducimus! Vero itaque voluptatum fugit omnis qui tempore provident pariatur dolores cupiditate? Error, exercitationem. Exercitationem impedit sunt, ea vero ipsa eligendi! Tenetur magnam animi accusantium dolor neque explicabo facere, perspiciatis cum eum nam voluptates fugit veniam corporis repellendus ab quod illo esse repudiandae porro praesentium! Ad rerum nobis consectetur sed mollitia, ullam harum quis debitis dolorem, maiores impedit amet architecto, laborum non. Inventore nulla esse placeat similique ducimus repellat.</p>


      </div>
      <Contributions />

      <Repositories />
    </>
  );
};

export default HomePage;
