import { Injectable } from '@angular/core';

import { Group } from '../../models/group';
import { Api } from '../api/api';

@Injectable()
export class Groups {

  defaultItem: any = {

  };

  data: any = [];


  constructor(public api: Api) { }

  query(params?: any) {
    return this.api.get('/groups', params);
  }

  add(group: Group) {
  }

  delete(group: Group) {
  }

}
