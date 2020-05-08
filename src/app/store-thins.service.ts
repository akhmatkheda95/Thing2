import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreThinsService {
  items = [
    {
      id: 1,
      title: 'Сделать 5 отжиманий',
      completed: false,
      important: false,
      category: 'личные дела',
    },
    {
      id: 2,
      title: 'Купить новую приору 2018 года',
      completed: false,
      important: false,
      category: 'покупки',
    },
    {
      id: 3,
      title: 'Купить фотоаппарат до свадьбы',
      completed: false,
      important: false,
      category: 'покупки',
    },
    {
      id: 4,
      title: 'Встретиться с Мариной',
      completed: false,
      important: false,
      category: 'личные дела',
    },
    {
      id: 5,
      title: 'Прочитать 52 книги до конца года',
      completed: false,
      important: false,
      category: 'чтение',
    },
  ];

  selectedCategory = null;

  onlyImportant = false;

  getOnlyImortant() {
    return this.onlyImportant;
  }

  toggleOnlyImportant() {
    this.onlyImportant = !this.onlyImportant;
  }

  selectCategory(category) {
    this.selectedCategory = category;
  }

  getCategories() {
    const categories = [];

    this.items.forEach((item) => {
      if (categories.indexOf(item.category) === -1) {
        categories.push(item.category);
      }
    });
    return categories;
  }

  getItems() {
    let items;

    if (this.onlyImportant) {
      items = this.items.filter((item) => item.important);
    } else {
      items = this.items;
    }

    if (this.selectedCategory !== null) {
      return items.filter((item) => item.category === this.selectedCategory);
    }
    return items;
  }

  removeCompletedItems() {
    this.items = this.items.filter((item) => !item.completed);
  }

  toggleImportant(id) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          important: !item.important,
        };
      }
      return item;
    });
  }

  toggleCompleted(id) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });
  }

  constructor() {}
}
