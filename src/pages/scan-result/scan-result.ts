import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the ScanResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html'
})
export class ScanResultPage {
  public scannedText: string;
  public name : string;
  public tickets : string;

  constructor(public navCtrl: NavController, private _navParams: NavParams, private alertCtrl: AlertController) {}

  ionViewDidEnter() {
    this.scannedText = this._navParams.get("scannedText");
    this.name = this._navParams.get("name");
    this.tickets = this._navParams.get("people");

  }
  public presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirm purchase',
    message: 'Do you want to buy this book?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Buy',
        handler: () => {
          console.log('Buy clicked');
        }
      }
    ]
  });
  alert.present();
}
}