import { IPersonInstance, PeopleService } from 'src/app/services/people.service';
import { PlayerService } from 'src/app/services/player.service';
import { TradersService } from 'src/app/services/traders.service';

import { Action } from '..';

export function BuildActions(fame: number): Action[] {
  return [
    {
      name: `Whore out for ${fame}$`,
      do: (
        instance: IPersonInstance,
        peopleService: PeopleService,
        tradersService: TradersService,
        playerService: PlayerService
      ): IPersonInstance => {
        playerService.money += 10000;
        instance.relation.obedience += 0.01;
        return instance;
      }
    }
  ]
}
