import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/model/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: Item = new Item();
  @Output() countUpdate = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  increment() {
    this.item.count++;
    this.countUpdate.emit();
  }

  decrement() {
    this.item.count--;
    this.countUpdate.emit();
  }

}
