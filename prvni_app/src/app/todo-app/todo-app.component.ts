import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.scss']
})
export class TodoAppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";
  searchQuery = '';

  allItems: any[] = [];

  constructor() {
    this.loadItems();
  }

  get items() {
    let filteredItems = this.allItems;

    if (this.filter !== "all") {
      filteredItems = filteredItems.filter((item) =>
        this.filter === "done" ? item.done : !item.done
      );
    }

    if (this.searchQuery) {
      filteredItems = filteredItems.filter((item) =>
        item.description.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    return filteredItems;
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description: description,
      done: false
    });
    this.saveItems();
  }

  deleteItem(item: any) {
    this.allItems = this.allItems.filter((i) => i !== item);
    this.saveItems();
  }

  loadItems() {
    const storedItems = localStorage.getItem('todo-items');
    if (storedItems) {
      this.allItems = JSON.parse(storedItems);
    }
  }

  saveItems() {
    localStorage.setItem('todo-items', JSON.stringify(this.allItems));
  }
}
