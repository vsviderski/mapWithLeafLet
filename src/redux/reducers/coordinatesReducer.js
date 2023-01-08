import { createSlice } from '@reduxjs/toolkit'

const initialCoordinates = [
  {
    id: Math.random(),
    number: '1',
    fromLatitude: '59.84660399',
    fromLongitude: '30.29496392',
    toLatitude: '59.82934196',
    toLongitude: '30.82423701',
  },
  {
    id: Math.random(),
    number: '2',
    fromLatitude: '59.82934196',
    fromLongitude: '30.42423701',
    toLatitude: '59.82761295',
    toLongitude: '30.81705607',
  },
  {
    id: Math.random(),
    number: '3',
    fromLatitude: '59.83567701',
    fromLongitude: '30.38064206',
    toLatitude: '59.84660399',
    toLongitude: '30.89496392',
  },
  {
    id: Math.random(),
    number: '4',
    fromLatitude: '59.84660399',
    fromLongitude: '30.29496392',
    toLatitude: '59.82761295',
    toLongitude: '30.41705607',
  },
  {
    id: Math.random(),
    number: '5',
    fromLatitude: '59.83567701',
    fromLongitude: '30.38064206',
    toLatitude: '59.84660399',
    toLongitude: '30.29496392',
  },
  {
    id: Math.random(),
    number: '6',
    fromLatitude: '59.83567701',
    fromLongitude: '30.38064206',
    toLatitude: '58.84660399',
    toLongitude: '35.29496392',
  },
  {
    id: Math.random(),
    number: '7',
    fromLatitude: '50.83567701',
    fromLongitude: '31.38064206',
    toLatitude: '60.84660399',
    toLongitude: '35.29496392',
  },
  {
    id: Math.random(),
    number: '8',
    fromLatitude: '55.83567701',
    fromLongitude: '30.38064206',
    toLatitude: '63.84660399',
    toLongitude: '33.29496392',
  },
  {
    id: Math.random(),
    number: '9',
    fromLatitude: '58.83567701',
    fromLongitude: '30.38064206',
    toLatitude: '68.84660399',
    toLongitude: '32.29496392',
  }
];

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState: initialCoordinates,
  reducers: {
    addCoordinate: (state, action) => {
      state.push(action.payload);
    },
    removeCoordinate: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const coordinatesReducer = coordinatesSlice.reducer;
export const coordinatesActions = coordinatesSlice.actions;