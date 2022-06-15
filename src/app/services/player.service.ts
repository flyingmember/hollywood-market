import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { id as LandingLocationId } from 'src/data/locations/home/entrance';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private moneyBehav = new BehaviorSubject(10000);
  private locationBehav = new BehaviorSubject<string>(LandingLocationId);

  public $location = this.locationBehav.asObservable();
  public $money = this.moneyBehav.asObservable();

  public get money(): number { return this.moneyBehav.getValue(); }
  public set money(money: number) {
    if (money < 0) { throw new Error("Can't have less than 0$ you dumb fuck"); }
    this.moneyBehav.next(money);
  }

  public get location(): string { return this.locationBehav.getValue(); }
  public set location(location: string) { this.locationBehav.next(location); }

  goTo(location: string) {
    this.location = location;
  }

  constructor() { }
}
