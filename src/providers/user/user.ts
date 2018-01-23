import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

@Injectable()
export class User {
  _user: any;
  public teacher: any;

  constructor(public api: Api) { 
    this.teacher = {};
  }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      this._loggedIn(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  googlePlusLogin(user: any) {
    let seq = this.api.post('login/edu', user).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      this._loggedIn(res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  setTeacher(teacher) {
    this.teacher = teacher;
  }

  getTeacher() {
    return this.teacher;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
    localStorage.setItem('teacher', this._user);
    return this._user;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp;
    localStorage.setItem('teacher', JSON.stringify(this._user));
  }
  
}
