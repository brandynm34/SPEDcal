import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Items } from '../../providers/providers';

/**
 * Generated class for the TasksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
  providers: [Items]
})
export class TasksPage {
  student: any;
  calendar: any;
  today: any;
  day: any;
  allTask = ['breakfst', 'lunch', 'snack', 'potty', 'circleTime', 'screenTime', 'recess', 'artAndCrafts', 'autismClass', 'packUp', 'occTherapy', 'PE', 'senory', 'speech', 'writing'];

  constructor(public navCtrl: NavController, public navParams: NavParams, public students: Items, public viewCtrl: ViewController
  ) {
    this.student = navParams.get('item');
    this.day = navParams.get('day')

  }

  updateCal(calendar){
    this.students.updateCal(calendar, this.student._id);
  }
  dismiss() {
    this.updateCal(this.student)
    this.viewCtrl.dismiss();
  }

}
