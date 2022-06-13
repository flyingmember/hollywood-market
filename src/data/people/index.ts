import { PeopleService } from 'src/app/services/people.service';
import { PlayerService } from 'src/app/services/player.service';
import { TradersService } from 'src/app/services/traders.service';
import * as JessicaNigri from './jessiga-nigri';
import * as NatalieDyer from './natalie-dyer';

export type PersonData = {
  firstName: string;
  lastName: string;
  id: string;
  image: string;
  actions?: {
    name: string;
    do: (
      peopleService: PeopleService,
      tradersService: TradersService,
      playerService: PlayerService
    ) => void
  }[];
}

export const people = new Map<string, PersonData>([
  [JessicaNigri.id, JessicaNigri],
  [NatalieDyer.id, NatalieDyer],
])
