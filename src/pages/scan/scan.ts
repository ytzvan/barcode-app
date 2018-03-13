import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { ScanResultPage } from "../scan-result/scan-result.ts";

@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html'
})
export class ScanPage {
  public scannedText: string;
  public buttonText: string;
  public loading: boolean;
  private eventId: number;
  public eventTitle: string;

  constructor(
    private _nav: NavController,
    private _navParams: NavParams,
    private _barcodeScanner: BarcodeScanner,
    private _qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    this.eventId = this._navParams.get('eventId');
    this.eventTitle = this._navParams.get('eventTitle');

    this.buttonText = "Scan";
    this.loading = false;
  }

  public scanQR() {
    this.buttonText = "Loading..";
    this.loading = true;


    //Add barcode logic here


    this._qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {
         // camera permission was granted


         // start scanning
         let scanSub = this._qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);

           this._qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
         });

         // show camera preview
         this._qrScanner.show();

         // wait for user to scan something, then the observable callback will be called

       } else if (status.denied) {
         // camera permission was permanently denied
         // you must use QRScanner.openSettings() method to guide the user to the settings page
         // then they can grant the permission from there
         //this._qrScanner.openSettings()
       } else {
         // permission was denied, but not permanently. You can ask for permission again at a later time.
       }
    })
    .catch((e: any) => console.log('Error is', e));
}
  /*private goToResult(barcodeData) {
    this._nav.push(ScanResultPage, {
      scannedText: barcodeData.text
    });
  }*/
}


