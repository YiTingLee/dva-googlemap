import { driversLocation } from '../data/sample_drivers_location';

export default {
  namespace: 'main',
  state: {},
  reducers: {
    fetchTaxiLocation(state, { payload: value }) {
      var taxiInfo;
      switch (value) {
        case "ntut":
          taxiInfo = driversLocation.ntut;
          break;
        case "station":
          taxiInfo = driversLocation.station;
          break;
        case "taipei101":
          taxiInfo = driversLocation.taipei101;
          break;
        default:
          taxiInfo = driversLocation.error;
      }
      // console.log("reducers",taxiInfo);
      return { ...state, taxiInfo};
    },
  },
  effects: {},
  subscriptions: {},
};

// reducers: {
//   save(state, { payload: { data: list, total, page } }) {
//     return { ...state, list, total, page };
//   },
// },