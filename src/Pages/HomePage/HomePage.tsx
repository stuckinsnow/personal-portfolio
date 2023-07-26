import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';
import { animateButton } from '../../utils/elements';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');

  return (
    <>
      <div className='divider'>
        <ul className="fun">
          <li className="fun__item" onClick={animateButton}>01</li>
          <li className="fun__item" onClick={animateButton}>02</li>
          <li className="fun__item" onClick={animateButton}>03</li>
          <li className="fun__item" onClick={animateButton}>04</li>
        </ul>
      </div>

    </>
  );
};

export default HomePage;
