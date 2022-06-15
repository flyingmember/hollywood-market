import { PeopleService } from 'src/app/services/people.service';
import { PlayerService } from 'src/app/services/player.service';
import { TradersService } from 'src/app/services/traders.service';

export interface IPersonInstance {
  id: string;
  location: string;
  relation: {
    love: number;
    obedience: number;
  };
  enslaved: boolean;
  ownedByPlayer: boolean;
}

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
  initial?: Partial<IPersonInstance>;
}
