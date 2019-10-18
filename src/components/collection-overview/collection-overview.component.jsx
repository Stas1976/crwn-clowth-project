import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollections } from '../../redux/shop/shop.selector';

import './collection-overview.style.scss';

const CollectionOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStatteToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStatteToProps)(CollectionOverview);
