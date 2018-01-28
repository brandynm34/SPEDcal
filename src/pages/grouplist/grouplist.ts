import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

import { Group } from '../../models/group';
import { Groups } from '../../providers/providers';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';



@IonicPage()
@Component({
  selector: 'page-grouplist',
  templateUrl: 'grouplist.html',
  providers: [Groups, Items]
})
export class GrouplistPage {
  currentGroups: any;
  currentItems: any;
  classGroups: any;
  teacher: any;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public _class: User, public groups: Groups, public items: Items, public navParams: NavParams) {
      this.getGroups(_class.getTeacher()._id);
      this.teacher = _class.getTeacher();
      this.currentGroups = this.getGroups(_class.getTeacher()._id);
      this.getStudents(this._class.getTeacher()._id);
      this.getEvents();
  }

  ionViewDidLoad() {
  }

  getStudents(teacher) {
    this.items.query(teacher)
    .then(data => {
      this.currentItems = data;
      return this.currentItems;
    });
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(group) {
    this.groups.delete(group);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(group: Group) {
    this.navCtrl.push('GroupDetailPage', {
      group: group,
      currentItems: this.currentItems,
      allGroups: this.currentGroups
    });
  }

  getEvents() {
    this.items.query(this.teacher._id)
    .then(data => {
      this.currentItems = data;
    });
  }

  getGroups(id) {
    this.groups.getGroups(id)
    .then(data => {
      this.currentGroups = data;
    });
  }

  addGroup() {
    let addModal = this.modalCtrl.create('GroupCreatePage', {groups: this.currentGroups, groupsAmount: this.currentGroups.length});
    addModal.onDidDismiss(item => {
      this.getGroups(this.teacher._id);
    })
    addModal.present();
  }
}
