import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Groups } from '../../providers/providers';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-group-create',
  templateUrl: 'group-create.html',
})
export class GroupCreatePage {

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;
  teacherID: any;

  constructor(public navCtrl: NavController, 
    formBuilder: FormBuilder, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public _teacher: User,
    public _groups: Groups) {
    this.form = formBuilder.group({
      group_name: [''],
      id: [navParams.get('groups').length +1],
      members : [[]]
    });

    // Watch the form for changes
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {
    this.teacherID = this._teacher.getTeacher()._id
  }

  create() {
    if (!this.form.valid) { return; }
    this._groups.add(this.form.value, this.teacherID)
    .then(data=> {
      this.viewCtrl.dismiss();
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
