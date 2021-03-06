import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  title: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
