import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import { Group } from '../../models/group';
import { Groups } from '../../providers/providers';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { TodaysSchedulePage } from '../todays-schedule/todays-schedule';

/**
 * Generated class for the GroupDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-group-detail',
  templateUrl: 'group-detail.html',
  providers: [Groups, Items],
})
export class GroupDetailPage {
  group: any;
  students: any;
  members = [];
  item: any;

  constructor(
    public navCtrl: NavController,
    public groups: Groups,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    students: Groups,) {
      this.group = navParams.get('group') || students.defaultGroup;
      this.students = navParams.get('currentItems');
      console.log(this.students);
      this.getMembers(navParams.get('currentItems'));
      console.log(this.students);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupDetailPage');
  }

  getMembers(students){
    for(let i=0; i<students.length; i++){
    if(students[i].group_number == this.group.id){
    this.members.push(students[i]
    );}
    }
  }

  openSchedule(student: Item) {
    let modal = this.modalCtrl.create('TodaysSchedulePage', {
      item: student
    });
    modal.present();
    modal.onDidDismiss(() => {

    });
  }



}
