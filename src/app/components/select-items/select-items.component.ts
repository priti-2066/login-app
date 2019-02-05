import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {
  @Input() employees: string[];
  @Input() color: string;
  @Output() selectedItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ListItemChanged(event) {
    this.selectedItem.emit(event.target.value);
  }

}
