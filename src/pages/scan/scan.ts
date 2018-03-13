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


// start scanning
         let scanSub = this._qrScanner.scan().subscribe((text: string) => {
           console.log('Scanned something', text);

           this._qrScanner.hide(); // hide camera preview
           scanSub.unsubscribe(); // stop scanning
         });

         // show camera preview
         this._qrScanner.show();

   
}
  /*private goToResult(barcodeData) {
    this._nav.push(ScanResultPage, {
      scannedText: barcodeData.text
    });
  }*/
}


