import { LocationData } from 'src/models/locations';
import * as Entrance from './entrance';
import * as Outside from './outside';

export const Locations: [string, LocationData][] = [
  [Entrance.id, Entrance],
  [Outside.id, Outside],
]
