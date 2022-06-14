import { IPersonInstance, PeopleService } from 'src/app/services/people.service';
import { PlayerService } from 'src/app/services/player.service';
import { TradersService } from 'src/app/services/traders.service';
import * as JessicaNigri from './jessiga-nigri';
import * as NatalieDyer from './natalie-dyer';

export type ActionFN = (
  instance: IPersonInstance,
  peopleService: PeopleService,
  tradersService: TradersService,
  playerService: PlayerService
) => IPersonInstance;

export type Action = {
  name: string;
  do: ActionFN;
};

export type PersonData = {
  firstName: string;
  lastName: string;
  id: string;
  image: string;
  fame: number;
  actions?: Action[];
}

export const people = new Map<string, PersonData>([
  [JessicaNigri.id, JessicaNigri],
  [NatalieDyer.id, NatalieDyer],
])
