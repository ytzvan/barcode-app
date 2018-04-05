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
  public alertCtrl: AlertController;

  constructor(public navCtrl: NavController, private _navParams: NavParams) {}

  ionViewDidEnter() {
    console.log(this._navParams.get("scannedText"));
    this.scannedText = this._navParams.get("scannedText");
    this.name = this._navParams.get("name");
    this.tickets = this._navParams.get("people");
  }

  public showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}



