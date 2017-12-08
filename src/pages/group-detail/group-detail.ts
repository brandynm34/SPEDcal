import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';

import { Group } from '../../models/group';
import { Groups } from '../../providers/providers';

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
  providers: [Groups],

})
export class GroupDetailPage {
  group: any;


  constructor(
    public navCtrl: NavController,
    public groups: Groups,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    students: Groups) {
      this.group = navParams.get('group') || students.defaultGroup;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroupDetailPage');
  }





}
