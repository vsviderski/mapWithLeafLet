import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import { polylineReducer } from 'redux/reducers/polylineReducer';
import polylineSaga from 'sagas/polylineSaga';
import { coordinatesReducer } from '../reducers/coordinatesReducer';

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    coordinates: coordinatesReducer,
    polyline: polylineReducer
  },
  middleware: [saga],
});

saga.run(polylineSaga);