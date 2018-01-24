import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GroupMembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-members',
  templateUrl: 'group-members.html',
})
export class GroupMembersPage {
  group: any;
  tempGroup =[];
  students: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.students = navParams.get('currentItems');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupMembersPage');
  }

  temp(students) {
    this.tempGroup = students;
    for(let i=0; i<this.tempGroup.length; i++) {
      this.tempGroup[i]['in'] = false;
    }
  }

  updateMembers() {
    for(let i=0; i<this.group.members.length; i++) {
      let index = this.group.members.map(function(el) {
        return el.student_id;
      }).indexOf(this.group.members.student_id);
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
