import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { people } from 'src/data/people';
import { IPersonInstance, PersonData } from 'src/models/people';

export interface IPersonInstanceMapped extends IPersonInstance {
  data: PersonData;
}

export const DefaultInstance: IPersonInstance = {
  id: 'id',
  location: 'debug',
  relation: {
    love: 0,
    obedience: 0,
  },
  enslaved: false,
  ownedByPlayer: false,
}

const InitialList: { [key: string]: IPersonInstance; } = {};

people.forEach(person => InitialList[person.id] = {
  ...JSON.parse(JSON.stringify(DefaultInstance)),
  ...JSON.parse(JSON.stringify(person.initial || {})),
  id: person.id
})

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleInstances = new BehaviorSubject<{ [key: string]: IPersonInstance; }>(InitialList);

  get People(): { [key: string]: IPersonInstance; } { return this.peopleInstances.getValue(); }
  set People(data: { [key: string]: IPersonInstance; }) { this.peopleInstances.next(data); }

  public $people = this.peopleInstances.pipe(
    map((v) => Object.values(v).map((person): IPersonInstanceMapped => ({
      ...person,
      data: people.get(person.id)!
    })))
  );

  public $owned = this.$people.pipe(
    map(v => v.filter(person => person.ownedByPlayer))
  );

  getOnLocation(location: string): Observable<IPersonInstanceMapped[]> {
    return this.$people.pipe(
      map(ppl => ppl.filter(v => v.location === location))
    );
  }

  public patch(key: string, data: Partial<IPersonInstance>) {
    const ppl = this.People;
    ppl[key] = {
      ...JSON.parse(JSON.stringify(DefaultInstance)),
      ...people.get(key)?.initial,
      ...ppl[key],
      ...data,
      id: key,
    }
    this.People = ppl;
  }

  constructor() { }

}
