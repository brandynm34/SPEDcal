import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';
import { User } from '../../providers/providers';
import { Items } from '../../providers/providers';
import { MainPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : [Items]
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { email: string, pw: string } = {
    email: 'test@example.com',
    pw: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(public navCtrl: NavController,
    private googlePlus: GooglePlus,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.googlePlusLogin(this.account).subscribe((resp) => {
      if(resp) {
        console.log(resp);
        this.user.setTeacher(resp);
        this.navCtrl.push(MainPage, {teacher: resp});
      } else {
        this.loginErr();
      }
    }, (err) => {
      this.loginErr();
  });
}

google() {
  this.googlePlus.login({})
  .then(res => {
    this.user.googlePlusLogin(res).subscribe((resp) => {
      if(resp) {
        this.user.setTeacher(resp);
        this.navCtrl.push(MainPage, {teacher: resp});
      } else {
        this.loginErr();
      }
    }, (err) => {
      this.loginErr();
  });
  })
  .catch(err => {
    this.loginErr();
  });
}

loginErr() {
  let toast = this.toastCtrl.create({
    message: this.loginErrorString,
    duration: 3000,
    position: 'top'
  });
  toast.present();
}
}
