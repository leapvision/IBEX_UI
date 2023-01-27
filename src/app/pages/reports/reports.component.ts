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
  heatNumbers = [];

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Reports' }];
    this.heatNumbers = ['IBEX-MW-01-22122022','IBEX-MW-01-20122022','IBEX-MW-02-21122022','IBEX-MW-02-25122022','IBEX-MW-01-10012023',
                        'IBEX-MW-02-11012023']
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

  showInspectionReport(){
    this.showInspectionReportFlag = !this.showInspectionReportFlag;
  }

}
