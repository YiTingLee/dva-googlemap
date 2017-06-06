import { driversLocation } from '../data/sample_drivers_location';
import { fetchDirecions } from '../services/directions';

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
      return { ...state, taxiInfo };
    },
  },
  effects: {
    *fetchDirecions({ payload: { lat, lng, olat, olng } }, { call, put }) {
      const result = yield call(fetchDirecions, lat, lng, olat, olng);
      console.log("eff result:",result);
    }
  },
  subscriptions: {},
};

// reducers: {
//   save(state, { payload: { data: list, total, page } }) {
//     return { ...state, list, total, page };
//   },
// },