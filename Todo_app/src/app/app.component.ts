import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  componentTitle = "My To Do List";

  filter: "all" | "active" | "done" = "all";

  allItems: any[] = [];

  constructor() {
    this.loadItems();
  }

  get items() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === "done" ? item.done : !item.done
    );
  }

  addItem(description: string) {
    if (!description) return;

    this.allItems.unshift({
      description,
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
