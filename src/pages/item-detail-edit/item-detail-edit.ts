import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { Items } from '../../providers/providers';

import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';


@IonicPage()
@Component({
  selector: 'page-item-detail-edit',
  templateUrl: 'item-detail-edit.html',
})
export class ItemDetailEditPage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, navParams: NavParams, public formBuilder: FormBuilder, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailEditPage');
  }


}
