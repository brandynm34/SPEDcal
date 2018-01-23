import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { FirstRunPage } from '../pages';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {

  constructor(public navCtrl: NavController, public user: User) { 
    if(JSON.parse(localStorage.getItem('teacher')) !== null) {
      this.navCtrl.push(MainPage, {teacher: localStorage.getItem('teacher')});
    }
  }

  login() {
    this.navCtrl.push('LoginPage');
  }
}
