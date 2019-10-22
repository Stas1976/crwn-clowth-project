import React from 'react';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import * as action from '../../redux/shop/shop.action';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.container';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={isCollectionFetching}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
});

export default connect(
  mapStateToProps,
  action
)(ShopPage);
