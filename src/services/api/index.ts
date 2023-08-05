import axios from 'axios';
import { ICoordinates } from '../../types';
import { ROUTE_API_URL } from '../../constants';

export default class ApiService {
  static async fetchPolyline(startPoint: ICoordinates, endPoint: ICoordinates) {
    try {
      return await axios.get(
        `${ROUTE_API_URL}${startPoint.latitude},${startPoint.longitude};${endPoint.latitude},${endPoint.longitude}?geometries=geojson`,
      );
    } catch (e) {
      console.log(e);
    }
  }
}
