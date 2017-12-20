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
  today: any;
  day: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public students: Items) {
    this.student = navParams.get('item');
    this.today = new Date();
    if(this.today.getDay()>-1 && this.today.getDay()<=5) {
      this.calendar = this.student.calendar[this.today.getDay()-1].tasks;
      this.today = this.student.calendar[this.today.getDay()-1].day;
    } else {
      let weekend = ["Saturday","","","","","", "Sunday"];
      this.calendar = [];
      this.today = weekend[this.today.getDay()];
    }
  }

  updateCal(calendar){
    this.students.updateCal(calendar, this.student._id);
  }

  dismiss() {
    this.updateCal(this.student);
    this.viewCtrl.dismiss();
  }
  
}
