import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-transfertomwo',
  templateUrl: './transfertomwo.component.html',
  styleUrls: ['./transfertomwo.component.scss'],
  providers: [ DecimalPipe]

})
export class TransferToMwoComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'MWO' }, { label: 'Transfer to MWO', active: true }];
  }

}
