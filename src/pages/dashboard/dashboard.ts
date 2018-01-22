import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/providers';
import { FirstRunPage } from '../pages';
import { App } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
  teacher: any;
  constructor(
    public navCtrl: NavController, public navParams: NavParams, public user: User, private app: App
  ){

  }

  openStudents() {
    this.navCtrl.push('ListMasterPage');
  }

  openGroups() {
    this.navCtrl.push('GrouplistPage');
  }

  logout() {
    this.user.logout()
    this.app.getRootNav().setRoot(FirstRunPage);
  }


}
