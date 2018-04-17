import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ScanPage } from "../scan/scan";

@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html'
})
export class EventListPage {
  public events: Array<{ id: number, title: string, description:string }> = [];
  constructor(private _nav: NavController) { }

  ionViewDidLoad() {
    this.getEvents();
  }

  private getEvents() {
    for (var index = 0; index < 2; index++) {
      this.events.push({ id: index, title: "Biomuseo - Entrada ", description: "Entrada Principal Biomuseo"});
    }
  }

  public scanForEvent(id: number, title: string, description: string) {
    this._nav.push(ScanPage, {
      eventId: id,
      eventTitle: title,
      eventDescripion: description
    });
  }

}
