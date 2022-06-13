import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Trade } from '../../data/traders'
import { PeopleService } from './people.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class TradersService {

  trade(trade: Trade) {
    this.player.money -= trade.price;
    this.people.add(trade.girlId);
  }

  constructor(
    private player: PlayerService,
    private people: PeopleService
  ) { }
}
