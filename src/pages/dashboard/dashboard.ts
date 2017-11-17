import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { ListMasterPage} from '../list-master/list-master';


@IonicPage()
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {

  constructor(
    public navCtrl: NavController,
  ){

      }

  openStudents() {
    this.navCtrl.push('ListMasterPage');
  }

  openGroups() {
    this.navCtrl.push('GrouplistPage');
  }


}
