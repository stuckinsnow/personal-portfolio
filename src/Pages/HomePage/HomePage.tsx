// import React from 'react';
import './HomePage.scss';
import { useDocumentTitle } from '../../utils/functions';

const HomePage: React.FC = () => {
  useDocumentTitle('Home Page');

  return (
    <div>
      <p>beep</p>
    </div>
  );
};

export default HomePage;
