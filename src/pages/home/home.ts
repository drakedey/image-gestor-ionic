import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { UploadPage } from '../pages.index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {
  }

  showModal(): void {
    const modal = this.modalCtrl.create(UploadPage);
    modal.present();
  }

}
