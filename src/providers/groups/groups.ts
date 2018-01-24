import { Injectable } from '@angular/core';

import { Group } from '../../models/group';
import { Api } from '../api/api';

@Injectable()
export class Groups {

  defaultItem: any = {

  };

  data: any = [];


  constructor(public api: Api) { }

  getGroups(params?: any) {
    return new Promise(resolve => {
      this.api.get('teacher/get-groups', params)
        .map(res => {
          return res;
        })
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  updateGroups(group, id) {
    this.api.post('teacher/update-groups', group, id)
    .subscribe(data => {
      return true
    }, error => { 
      return error
    });
  }

  add(group: Group) {
  }

  delete(group: Group) {
  }

}
