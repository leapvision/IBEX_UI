import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-mwoinspection',
  templateUrl: './mwoinspection.component.html',
  styleUrls: ['./mwoinspection.component.scss'],
  providers: [ DecimalPipe]

})
export class MWOInspectionComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;


  constructor() {
    this.breadCrumbItems = [{ label: 'MWO' }, { label: 'Chemical Inspection', active: true }];
  }

  ngOnInit(): void {
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
