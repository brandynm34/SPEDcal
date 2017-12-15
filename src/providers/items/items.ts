import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Api } from '../api/api';

@Injectable()
export class Items {

  defaultItem: any = {
    
  };

  data: any = [];

  constructor(public api: Api) { }

  query(params?: any) {

    if (params) {

      return new Promise(resolve => {
        this.api.get('students', params)
          .map(res => {
            console.log("param",res);
            return res;
          })
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
      
    } else {

      return new Promise(resolve => {
        this.api.get('students')
          .map(res => {
            console.log(res);
            return res;
          })
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });

    }

  }

  updateCal(item: Item, id) {
    this.api.post('students/cal', item, id)
    .subscribe(data => {
      console.log(data);
   }, error => {
     console.log(error); 
   });
  }

  add(item: Item) {
    this.api.post('new/student', item)
    .subscribe(data => {
       console.log(data);
    }, error => {
      console.log(error); 
    });
  }

  delete(item: string) {
    this.api.delete('students', item)
    .subscribe(data => {
       console.log(data);
    }, error => {
      console.log(error); 
    });
  }

}
