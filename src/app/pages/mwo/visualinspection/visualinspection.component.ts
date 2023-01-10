import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-visualinspection',
  templateUrl: './visualinspection.component.html',
  styleUrls: ['./visualinspection.component.scss'],
  providers: [ DecimalPipe]

})
export class VisualInspectionComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;


  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'MWO' }, { label: 'Visual Inspection', active: true }];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
