import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import { CollectionOverviewContainer } from './colection-overview.style';

const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
  );
};

const mapStatteToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});

export default connect(mapStatteToProps)(CollectionOverview);
