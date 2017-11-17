import { Injectable } from '@angular/core';

import { Group } from '../../models/group';
// import { Groups } from '../../providers/providers';

@Injectable()
export class Groups {
    groups: Group[] = [];

    defaultGroup: any = {
      "name": "Group Number",
      "id": "1"
    };

constructor() {
  let groups = [
      {
        "name": "Group Number",
        "id": "1"
      },
      {
        "name": "Group Number",
        "id": "2"
      },
      {
        "name": "Group Number",
        "id": "3"
      },
      {
        "name": "Group Number",
        "id": "4"
      },
      {
        "name": "Group Number",
        "id": "5"
      },
  ];

  for (let group of groups) {
    this.groups.push(new Group(group));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.groups;
    }

    return this.groups.filter((group) => {
      for (let key in params) {
        let field = group[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return group;
        } else if (field == params[key]) {
          return group;
        }
      }
      return null;
    });
  }

  add(group: Group) {
    this.groups.push(group);
  }

  delete(group: Group) {
    this.groups.splice(this.groups.indexOf(group), 1);
  }
}
