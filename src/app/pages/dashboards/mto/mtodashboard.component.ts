import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { ChartType } from '../echart.model';

import { pieChart } from '../data';
@Component({
  selector: 'app-mtodashboard',
  templateUrl: './mtodashboard.component.html',
  styleUrls: ['./mtodashboard.component.scss'],
  providers: [ DecimalPipe]

})
export class MtoDashboardComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;
  

  constructor() {
    this.breadCrumbItems = [{ label: 'Dashboard' }, { label: 'MTO', active: true }];
  }

  pieChart: ChartType;

  ngOnInit(): void {
    this._fetchData();
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
  private _fetchData() {
    this.pieChart = pieChart;
  }

}
