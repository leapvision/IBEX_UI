import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-printing',
  templateUrl: './printing.component.html',
  styleUrls: ['./printing.component.scss'],
  providers: [ DecimalPipe]

})
export class PrintingComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;

  constructor() {
    this.breadCrumbItems = [{ label: 'MWO' }, { label: 'Print', active: true }];
  }

  ngOnInit(): void {
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
