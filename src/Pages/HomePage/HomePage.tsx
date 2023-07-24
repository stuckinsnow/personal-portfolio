import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');

  return (
    <div>
      Beep
    </div>
  );
};

export default HomePage;
