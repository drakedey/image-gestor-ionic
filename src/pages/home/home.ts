import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { UploadPage } from '../pages.index';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: any;

  constructor(private modalCtrl: ModalController, private afDB: AngularFireDatabase) {
    this.posts = afDB.list('Posts').valueChanges();
  }

  showModal(): void {
    const modal = this.modalCtrl.create(UploadPage);
    modal.present();
  }

}
