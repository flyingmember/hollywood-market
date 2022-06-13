import { PeopleService } from "src/app/services/people.service";
import { PlayerService } from "src/app/services/player.service";
import { TradersService } from "src/app/services/traders.service";

export const firstName = 'Jessica';
export const lastName = 'Nigri';

export const id = 'jessica-nigri';

export const image = 'assets/people/jessica-nigri/283173358_540095167516793_2341577861431067750_n.webp';

export const actions = [
  {
    name: 'Whore out for 10.000$',
    do: (
      peopleService: PeopleService,
      tradersService: TradersService,
      playerService: PlayerService
    ) => {
      playerService.money += 10000;
    }
  }
]
