import * as types from './shop.types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utility';

export const fetchCollectionsStart = () => ({
  type: types.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = payload => ({
  type: types.FETCH_COLLECTIONS_SUCCESS,
  payload
});

export const fetchCollectionsFailure = errorMessage => ({
  type: types.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};
