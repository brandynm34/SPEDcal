import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { IonicPage, NavController, ViewController, ToastController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { User } from '../../providers/providers';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})
export class ItemCreatePage {
  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;
  updateErrorString: any;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController,
    public items: Items,
    public _class: User,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    formBuilder: FormBuilder,
    public camera: Camera) {
    this.form = formBuilder.group({
      profile_pic: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      teacher_id: this._class.getTeacher()._id,
      calendar: [[{
        "day": "Monday",
        "tasks": [

                ]
            },
            {
                "day": "Tuesday",
                "tasks": [

                ]
            },
            {
                "day": "Wednesday",
                "tasks": [

                ]
            },
            {
                "day": "Thursday",
                "tasks": [

                ]
            },
            {
                "day": "Friday",
                "tasks": [

                ]
            }]]
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });

    this.translateService.get('GROUP_UPDATE_ERROR').subscribe((value) => {
      this.updateErrorString = value;
    });
  }

  ionViewDidLoad() {

  }

  getPicture() {
    if (Camera['installed']()) {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profile_pic': 'data:image/jpg;base64,' + data });
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {

      let imageData = (readerEvent.target as any).result;
      this.form.patchValue({ 'profile_pic': imageData });
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  getProfileImageStyle() {
    return 'url(' + this.form.controls['profile_pic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {

    if (!this.form.valid) { return; }
    //if img not selected chooses placeholder
    if (this.form.get('profile_pic').value === '') {
      this.form.patchValue({ 'profile_pic': '../../assets/img/profile-place-holder.png'});}

    this.items.add(this.form.value)
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
