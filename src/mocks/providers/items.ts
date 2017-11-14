import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "groupNumber": "Group 1",
  };


  constructor() {
    let items = [
      {
        "name": "Johnny Smith",
        "profilePic": "assets/img/speakers/boy1.jpg",
        "groupNumber": "4"
      },
      {
        "name": "Susie Baker",
        "profilePic": "assets/img/speakers/girl1.jpg",
        "groupNumber": "3"
      },
      {
        "name": "Devin Atmoore",
        "profilePic": "assets/img/speakers/boy2.jpg",
        "groupNumber": "1"
      },
      {
        "name": "Eva Townsend",
        "profilePic": "assets/img/speakers/girl2.jpg",
        "groupNumber": "5"
      },
      {
        "name": "Theo Menefee",
        "profilePic": "assets/img/speakers/boy3.jpg",
        "groupNumber": "2"
      },
      {
        "name": "Ellie Phillips",
        "profilePic": "assets/img/speakers/girl3.jpg",
        "groupNumber": "3"
      },
      {
        "name": "Eric Hatmaker",
        "profilePic": "assets/img/speakers/boy4.jpg",
        "groupNumber": "2"
      },
      {
        "name": "Mary Altmire",
        "profilePic": "assets/img/speakers/girl4.jpg",
        "groupNumber": "1"
      },
      {
        "name": "Grant Copeland",
        "profilePic": "assets/img/speakers/boy5.jpg",
        "groupNumber": "5"
      },
      {
        "name": "Sandy Jackson",
        "profilePic": "assets/img/speakers/girl5.jpg",
        "groupNumber": "3"
      },

    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
