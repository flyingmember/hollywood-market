import { PersonData } from 'src/models/people';

import * as JessicaNigri from './jessiga-nigri';
import * as LeaElui from './lea-elui';
import * as NatalieDyer from './natalie-dyer';
import * as Pokimane from './pokimane';


export const people = new Map<string, PersonData>([
  [JessicaNigri.id, JessicaNigri],
  [NatalieDyer.id, NatalieDyer],
  [Pokimane.id, Pokimane],
  [LeaElui.id, LeaElui],
])
