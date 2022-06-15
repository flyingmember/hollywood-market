import { Injectable } from '@angular/core';
import { people } from 'src/data/people';
import { ActionFN } from 'src/models/people';

import { DefaultInstance, PeopleService } from './people.service';
import { PlayerService } from './player.service';
import { TradersService } from './traders.service';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  doActionFunction(id: string, fn: ActionFN) {
    console.log(id);
    const ppl = this.people.People;
    this.people.patch(id, fn({
      ...JSON.parse(JSON.stringify(DefaultInstance)),
      ...people.get(id)?.initial,
      ...ppl[id],
      id,
    }, this.people, this.traders, this.player));
  }

  constructor(
    private people: PeopleService,
    private traders: TradersService,
    private player: PlayerService
  ) { }
}
