import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
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
  public nOfAdults : number;
  public nOfChildren : number;
  public nOfInfants : number;
  public purchaseDate : Date;

  constructor(public navCtrl: NavController, 
    private _navParams: NavParams, 
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidEnter() {
    this.scannedText = this._navParams.get("scannedText");
    this.name = this._navParams.get("name");
    this.tickets = this._navParams.get("people");
    this.nOfAdults = this._navParams.get("nOfAdults");
    this.nOfChildren = this._navParams.get("nOfChildren");
    this.nOfInfants = this._navParams.get("nOfInfants");
    this.purchaseDate = this._navParams.get("purchaseDate");

  }
  public presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Confirmar entrada',
    message: 'Desea confirmar entradas?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Validar',
        handler: () => {
          console.log('Buy clicked');
            let loader = this.loadingCtrl.create({
              content: "Validando ticket...",
              duration: 2300
            });
            loader.onDidDismiss(() => {
              this.showAlert();
              this.navCtrl.pop();
            });
            loader.present();
          
          
        }
      }
    ]
  });
  alert.present();
}
private showAlert() {
  let alert = this.alertCtrl.create({
    title: 'Entrada validada',
    subTitle: 'Entrada validada con éxito',
    buttons: ['OK']
  });
  alert.present();
}
}
