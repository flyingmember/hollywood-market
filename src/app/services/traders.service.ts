import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { people } from 'src/data/people';

import { Trade } from '../../data/traders'
import { PeopleService } from './people.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class TradersService {

  trade(trade: Trade) {
    this.player.money -= people.get(trade.girlId)?.fame!;
    this.people.patch(trade.girlId, { owned: true });
  }

  constructor(
    private player: PlayerService,
    private people: PeopleService
  ) { }
}
