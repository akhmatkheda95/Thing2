import { Component, OnInit } from '@angular/core';
import { StoreThinsService } from '../store-thins.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  constructor(private thinsStore: StoreThinsService) {}

  isOnlyImportant() {
    return this.thinsStore.onlyImportant;
  }

  toggleCompleted(id) {
    this.thinsStore.toggleCompleted(id);
  }

  toggleImportant(id) {
    this.thinsStore.toggleImportant(id);
  }
  removeCompletedItems() {
    this.thinsStore.removeCompletedItems();
  }

  getItems() {
    return this.thinsStore.getItems();
  }

  toggleOnlyImportant() {
    this.thinsStore.toggleOnlyImportant();
  }

  ngOnInit(): void {}
}
