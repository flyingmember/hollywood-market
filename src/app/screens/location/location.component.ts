import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, switchMap } from 'rxjs';
import { ActionsService } from 'src/app/services/actions.service';
import { IPersonInstanceMapped, PeopleService } from 'src/app/services/people.service';
import { PlayerService } from 'src/app/services/player.service';
import { TradersService } from 'src/app/services/traders.service';
import { locations } from 'src/data/locations';
import { Locations } from 'src/data/locations/home';
import { people } from 'src/data/people';
import { LocationData } from 'src/models/locations';
import { TraderData } from 'src/models/traders';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnDestroy {

  $traders: Observable<TraderData[]>;
  $people: Observable<IPersonInstanceMapped[]>;
  $location: Observable<LocationData | undefined>;

  people = people;

  private sub: Subscription;

  @HostBinding('style.backgroundImage') private backgroundImage = '';

  constructor(
    public actionsService: ActionsService,
    public peopleService: PeopleService,
    public tradersService: TradersService,
    public playerService: PlayerService
  ) {
    this.$traders = this.playerService.$location.pipe(
      switchMap(v => this.tradersService.getOnLocation(v))
    );
    this.$location = this.playerService.$location.pipe(
      map(v => locations.get(v))
    );
    this.$people = this.playerService.$location.pipe(
      switchMap(v => this.peopleService.getOnLocation(v))
    );
    this.sub = this.$location.subscribe(v => this.backgroundImage = `url('${v?.image}')`)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
