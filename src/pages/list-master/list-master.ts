import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html',
  providers: [Items]
})
export class ListMasterPage {
  public arr : Array<string> = [];
  currentItems: any;
  public teacher: any = {};
  val: string = '';

  constructor(public navCtrl: NavController, public _class: User, public items: Items, public modalCtrl: ModalController, public nav: NavParams) {
    this.teacher = this._class.getTeacher(); 
    this.getStudents(this._class.getTeacher()._id);
    this.arr.push('first_name');
    this.arr.push('last_name');
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  getVal(ev) {
    this.val = ev.target.value;
  }

  getStudents(teacher) {
    this.items.query(teacher)
    .then(data => {
      this.currentItems = data;
      return this.currentItems;
    });
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
        this.getStudents(this.teacher._id);
      }
      this.getStudents(this.teacher._id);
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(student) {
    this.items.delete(student._id);
    let index: number = this.currentItems.indexOf(student);
    this.currentItems.splice(index, 1);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
