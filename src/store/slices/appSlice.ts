import { createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "../../types";

const initialState: IInitialState = {
  claims: [
    {
      id: 1,
      name: "Маршрут №1",
      departurePoint: {
        name: "г. Ижевск, ул. Ленина, д 1",
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
      intermediatePoint: {
        name: "г. Ижевск, ул Труда, д 5",
        coords: {
          latitude: 59.82934196,
          longitude: 30.42423701,
        },
      },
      arrivalPoint: {
        name: "г. Ижевск, ул Труда, д 1",
        coords: {
          latitude: 59.83567701,
          longitude: 30.38064206,
        },
      },
    },
    {
      id: 2,
      name: "Маршрут №2",
      departurePoint: {
        name: "г. Воронеж, ул. Ленина, д 2",
        coords: {
          latitude: 59.82934196,
          longitude: 30.42423701,
        },
      },
      intermediatePoint: {
        name: "г. Воронеж, ул Труда, д 1",
        coords: {
          latitude: 59.82761295,
          longitude: 30.41705607,
        },
      },
      arrivalPoint: {
        name: "г. Воронеж, ул Шоссе Энтузиастов, д 10",
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
    },
    {
      id: 3,
      name: "Маршрут №3",
      departurePoint: {
        name: "г. Вологда, ул. Майская, д 1",
        coords: {
          latitude: 59.83567701,
          longitude: 30.38064206,
        },
      },
      intermediatePoint: {
        name: "г. Вологда, ул Труда, д 1",
        coords: {
          latitude: 59.84660399,
          longitude: 30.29496392,
        },
      },
      arrivalPoint: {
        name: "г. Вологда, ул Ельцина, д 1",
        coords: {
          latitude: 59.82761295,
          longitude: 30.41705607,
        },
      },
    },
  ],
  isLoading: false,
  selectedClaim: undefined,
  selectedClaimPolyline: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSelectedClaim: (state, action) => {
      state.isLoading = true;
      state.selectedClaim = action.payload;
    },
    setSelectedClaimPolyline: (state, action) => {
      state.selectedClaimPolyline = action.payload;
      state.isLoading = false;
    },
  },
});

export const { setSelectedClaim, setSelectedClaimPolyline } = appSlice.actions;

export default appSlice.reducer;
