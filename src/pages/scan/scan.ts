import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ScanResultPage } from "../scan-result/scan-result.ts";
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
    private _iab: InAppBrowser) {
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

    this._barcodeScanner.scan().then((barcodeData) => {
      if (barcodeData.cancelled) {
        console.log("User cancelled the action!");
        this.loading = false;
        return false;
      }
      this.goToResult(barcodeData);
      this.buttonText = "Scan";
      this.loading = false;

      // with barcode data, perform query to API and then show result. 

    }, (err) => {
      console.log(err);
      this.buttonText = "Scan";
      this.loading = false;
    });
  }


  private getBookingInfo(barcodeData){

  }
  private goToResult(barcodeData) {
    let bookingInfo = {
      name : "Ytzvan Mastino",
      status: 0,
      people: 2
    };
    this._nav.push(ScanResultPage, bookingInfo);
  }


  private showPage(barcodeData) {
    const browser = this._iab.create(barcodeData.text);
  }
}
