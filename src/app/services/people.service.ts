import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { people } from 'src/data/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private ownershipIds = new BehaviorSubject<string[]>([]);

  public $ownerships = this.ownershipIds.pipe(
    map(v => v.map(id => people.get(id)))
  );

  public add(key: string) {
    this.ownershipIds.next([
      ...this.ownershipIds.getValue(),
      key
    ]);
  }

  constructor() { }

}
