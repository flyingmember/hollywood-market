import { Component } from '@angular/core';
import { people } from 'src/data/people';
import { traders } from 'src/data/traders';
import { ActionsService } from './services/actions.service';
import { PeopleService } from './services/people.service';
import { PlayerService } from './services/player.service';
import { TradersService } from './services/traders.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hollywood';

  public people = people;
  public traders = traders;

  constructor(
    public actionsService: ActionsService,
    public peopleService: PeopleService,
    public tradersService: TradersService,
    public playerService: PlayerService
  ) { }
}
