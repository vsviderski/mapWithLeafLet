import axios from 'axios';
import { GET_POLYLINE } from './Constants';

export const getPolylineData = (payload) => {
  const { fromLatitude, fromLongitude, toLatitude, toLongitude } = payload;
  const url = GET_POLYLINE + `${fromLatitude},${fromLongitude};${toLatitude},${toLongitude}`;
  return axios(url).then((res) => res.data);
};
