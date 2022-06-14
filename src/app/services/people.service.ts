import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { people, PersonData } from 'src/data/people';

export interface IPersonInstance {
  id: string;
  relation: {
    love: number;
    obedience: number;
  };
  owned: boolean;
}

export interface IPersonInstanceMapped {
  id: string;
  relation: {
    love: number;
    obedience: number;
  };
  owned: boolean;
  data: PersonData;
}

export const DefaultInstance: IPersonInstance = {
  id: 'id',
  relation: {
    love: 0,
    obedience: 0,
  },
  owned: false,
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private peopleInstances = new BehaviorSubject<{ [key: string]: IPersonInstance; }>({});

  get People(): { [key: string]: IPersonInstance; } { return this.peopleInstances.getValue(); }
  set People(data: { [key: string]: IPersonInstance; }) { this.peopleInstances.next(data); }

  public $people = this.peopleInstances.pipe(
    map((v) => {
      return Object.values(v).map((person): IPersonInstanceMapped => ({
        ...person,
        data: people.get(person.id)!
      }));
    })
  );

  public $owned = this.$people.pipe(
    map(v => v.filter(person => person.owned))
  );

  public patch(key: string, data: Partial<IPersonInstance>) {
    const ppl = this.People;
    ppl[key] = {
      ...JSON.parse(JSON.stringify(DefaultInstance)),
      ...ppl[key],
      ...data,
      id: key,
    }
    this.People = ppl;
  }

  constructor() { }

}
