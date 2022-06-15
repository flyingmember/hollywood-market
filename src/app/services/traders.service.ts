import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { people } from 'src/data/people';
import { traders } from 'src/data/traders';
import { Trade, TraderData } from 'src/models/traders';

import { PeopleService } from './people.service';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class TradersService {

  trade(trade: Trade) {
    this.player.money -= people.get(trade.girlId)?.fame!;
    this.people.patch(trade.girlId, { ownedByPlayer: true });
  }

  getOnLocation(location: string): Observable<TraderData[]> {
    return of(
      [...traders.entries()]
        .map(([id, trader]) => trader as TraderData)
        .filter(v => v.location === location)
    );
  }

  constructor(
    private player: PlayerService,
    private people: PeopleService
  ) {
    console.log(traders)
  }
}
