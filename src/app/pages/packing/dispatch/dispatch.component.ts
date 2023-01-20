import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-dispatch',
  templateUrl: './dispatch.component.html',
  styleUrls: ['./dispatch.component.scss'],
  providers: [ DecimalPipe]

})
export class DispatchComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;
  containerNumbers = [];
  invoiceNumbers = [];
  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Packing' }, { label: 'Dispatch', active: true }];
    this.containerNumbers = ['MRKU09876SH','MRKU098456SH'];
    this.invoiceNumbers = ['IEPL/0148/22-23','IEPL/0150/22-23','IEPL/0151/22-23','IEPL/0152/22-23'];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
