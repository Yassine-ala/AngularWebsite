import { Component, OnInit } from '@angular/core';
import {Recepie} from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[] = [
    new Recepie('Test Recepie', 'this is the fkn test recipe',
      'http://crunchfoodcompany.com/wp-content/uploads/2015/03/side-of-salmon.jpg'),
    new Recepie('Test Recepie', 'this is the fkn test recipe',
      'http://crunchfoodcompany.com/wp-content/uploads/2015/03/side-of-salmon.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
