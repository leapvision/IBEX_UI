import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
  providers: [ DecimalPipe]

})
export class ReportsComponent implements OnInit {
  
  breadCrumbItems: Array<{}>;
  showInspectionReportFlag = false;

  hideme: boolean[] = [false,false,true];


  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Reports' }];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

  showInspectionReport(){
    this.showInspectionReportFlag = !this.showInspectionReportFlag;
  }

}
