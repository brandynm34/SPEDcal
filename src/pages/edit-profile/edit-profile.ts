import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Items } from '../../providers/providers';
import { User } from '../../providers/providers';
/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
  providers: [Items]
})
export class EditProfilePage {
  isReadyToSave: boolean;
  updateErrorString = "Unable to update student profile.";
  item: any;
  form: FormGroup;
  student: any;

  constructor(public navCtrl: NavController, 
    public _student: Items, 
    public _class: User,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    formBuilder: FormBuilder,
     public navParams: NavParams) {
      this.form = formBuilder.group({
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        notes: [''],
      });
      // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.student = navParams.get('student');
       
  }

  ionViewDidLoad() {
    
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.form.value.notes = [this.form.value.notes];
    this.viewCtrl.dismiss();
  }

  /**
   * update student with new inputs checks for empty strings
   * first.
   */
  done() {
    this.form.value.notes = [this.form.value.notes];
    if (!this.form.valid) { this.creationErr(); return;} 
      this._student.updateProfile(this.form.value, this.student._id)
      .then(data =>{
        this.viewCtrl.dismiss();
      })
      .catch(err => {
        this.creationErr();
        this.viewCtrl.dismiss();
      });
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
