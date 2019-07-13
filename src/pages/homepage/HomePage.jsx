import React from 'react';

import './HomePage.scss';
import Directory from '../../components/directory/Directory';
const HomePage = ({ history }) => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
