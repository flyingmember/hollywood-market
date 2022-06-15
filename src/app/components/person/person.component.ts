import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActionsService } from 'src/app/services/actions.service';
import { IPersonInstanceMapped } from 'src/app/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person!: IPersonInstanceMapped;

  @HostBinding('class.border-red-500') lover = false;
  @HostBinding('class.border-purple-500') sub = false;
  @HostBinding('class.border-black') slave = false;
  @HostBinding('class.border-yellow-500') yourSlave = false;

  constructor(
    public actionsService: ActionsService
  ) { }

  ngOnInit(): void {
    this.yourSlave = this.person.ownedByPlayer;
    this.slave = this.person.enslaved;
    this.sub = this.person.relation.obedience > 0.5;
    this.lover = this.person.relation.love > 0.5;
  }

}
