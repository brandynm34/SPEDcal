import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Items } from '../../providers/providers';
/**
 * Generated class for the TodaysSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todays-schedule',
  templateUrl: 'todays-schedule.html',
  providers: [Items]
})
export class TodaysSchedulePage {
  student: any;
  calendar: any;
  today: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public students: Items) {
    this.student = navParams.get('item');
    console.log('student schedule', this.student);
    let today = new Date();
    if(today.getDay()>-1 && today.getDay()<5) {
      this.calendar = this.student.calendar[today.getDay()-1].tasks;
      this.today = this.student.calendar[today.getDay()-1].day;
    }
  }

  updateCal(calendar) {

  }

  checklistCheck(calendar){
    this.students.updateCal(calendar);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
