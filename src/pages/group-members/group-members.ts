import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../providers/providers';
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
  tempMembers = [];
  students: any;

  constructor(public navCtrl: NavController, public _class: User, public navParams: NavParams, public viewCtrl: ViewController) {
    this.group =  navParams.get('group');
    this.temp(navParams.get('currentItems'));
    this.students = navParams.get('currentItems');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupMembersPage');
  }

  temp(students) {
    for(let j=0; j<students.length; j++) {
      this.tempMembers.push({student: students[j]});
      let index = this.group.members.indexOf(students[j]._id);
      if(index > -1) {
        this.tempMembers[j]['in'] = true;
      } else {
        this.tempMembers[j]['in'] = false;
      }
    }
    console.log(this.tempMembers);
  }

  updateMembers() {
    for(let i=0; i<this.group.members.length; i++) {
      let index = this.group.members.map(function(el) {
        return el.student_id;
      }).indexOf(this.group.members.student_id);
    }
  }

  dismiss() {
    console.log(this.tempMembers);
    this.viewCtrl.dismiss();
  }

}
