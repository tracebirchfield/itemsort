import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/Item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Item[] = [
    new Item('A'),
    new Item('B'),
    new Item('C'),
    new Item('D')
  ];

  constructor() { }

  ngOnInit(): void { }

}
