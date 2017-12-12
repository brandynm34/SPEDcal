import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Group } from '../../models/group';
import { Groups } from '../../providers/providers';
import { Item } from '../../models/item';
import { Items } from '../../providers/providers';



@IonicPage()
@Component({
  selector: 'page-grouplist',
  templateUrl: 'grouplist.html',
  providers: [Groups, Items]
})
export class GrouplistPage {
  currentGroups: any;
  currentItems: any;

  constructor(public navCtrl: NavController, public groups: Groups, public items: Items, public navParams: NavParams) {
      this.currentGroups = this.groups.query();
      this.getEvents();
  }

  ionViewDidLoad() {
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
      currentItems: this.currentItems

    });
  }

  getEvents() {
    this.items.query()
    .then(data => {
      this.currentItems = data;
    });
  }
}
