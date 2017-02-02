import {Component} from '@angular/core';
import {Person} from './shared/person';
import {PeopleService} from './shared/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {

  people: Person[] = [];

  // this shorthand syntax automatically creates and
  // initializes a new private member in the class
  constructor(private _peopleService : PeopleService){
    this.people = _peopleService.getAll();
  }
}
