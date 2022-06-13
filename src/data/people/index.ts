import * as JessicaNigri from './jessiga-nigri';

export type PersonData = {
  firstName: string;
  lastName: string;
  id: string;
  image: string;
}

export const people = new Map<string, PersonData>([
  [JessicaNigri.id, JessicaNigri]
])
