import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Group } from '../../models/group';
import { Groups } from '../../providers/providers';



@IonicPage()
@Component({
  selector: 'page-grouplist',
  templateUrl: 'grouplist.html',
})
export class GrouplistPage {
  currentGroups: Group[];

  constructor(public navCtrl: NavController, public groups: Groups, public navParams: NavParams) {
      this.currentGroups = this.groups.query();
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
    this.navCtrl.push('ListMasterPage', {
      group: group
    });
  }


}
