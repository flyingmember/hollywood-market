import { LocationData } from 'src/models/locations';
import * as Home from './home';
import * as Debug from './debug';

export const locations = new Map<string, LocationData>([
  [Debug.id, Debug],
  ...Home.Locations
])
