import axios from 'axios';
import { GET_POLYLINE, GET_POLYLINE_PARAMS } from './Constants';

export const getPolylineData = (payload) => {
  const { fromLatitude, fromLongitude, toLatitude, toLongitude } = payload;
  const url = GET_POLYLINE + `${fromLatitude},${fromLongitude};${toLatitude},${toLongitude}` + GET_POLYLINE_PARAMS;
  return axios(url).then((res) => res.data);
};
