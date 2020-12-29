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

  sort() {
    this.items.sort((a, b) => a.count < b.count ? 1 : (a.count > b.count ? -1 : (a.name > b.name ? 1 : -1)));
  }

}
