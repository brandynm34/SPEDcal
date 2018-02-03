import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Groups } from '../../providers/providers';
import { User } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-group-create',
  templateUrl: 'group-create.html',
  providers: [Groups]
})
export class GroupCreatePage {

  isReadyToSave: boolean;
  updateErrorString: any;
  item: any;
  currentGroups: any;
  form: FormGroup;
  teacherID: any;

  constructor(public navCtrl: NavController, 
    formBuilder: FormBuilder, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public _teacher: User,
    public _groups: Groups) {
    this.currentGroups = navParams.get('groups');
    this.form = formBuilder.group({
      group_name: [''],
      id: [navParams.get('groupsAmount') +1],
      members : [[]]
    });

    // Watch the form for changes
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.translateService.get('GROUP_UPDATE_ERROR').subscribe((value) => {
      this.updateErrorString = value;
    });
  }

  ionViewDidLoad() {
    this.teacherID = this._teacher.getTeacher()._id;
  }

  create() {
    if (!this.form.valid) { return; }
    this.currentGroups.push(this.form.value);
    this._groups.add(this.currentGroups, this.teacherID)
    .then(data=> {
      this.viewCtrl.dismiss();
    })
    .catch(err => {
      this.creationErr();
      this.viewCtrl.dismiss();
    });
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  creationErr() {
    let toast = this.toastCtrl.create({
      message: this.updateErrorString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

}
