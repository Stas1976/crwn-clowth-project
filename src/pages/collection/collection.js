import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item';
import './collection.style.scss';

const CollectionPage = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <h2>Category</h2>
    </div>
  );
};

export default CollectionPage;
