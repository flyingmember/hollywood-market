import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private moneyBehav = new BehaviorSubject(10000);

  public $money = this.moneyBehav.asObservable();

  public get money(): number { return this.moneyBehav.getValue(); }
  public set money(money: number) {
    if (money < 0) { throw new Error("Can't have less than 0$ you dumb fuck"); }
    this.moneyBehav.next(money);
  }

  constructor() { }
}
