import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-certquality',
  templateUrl: './certquality.component.html',
  styleUrls: ['./certquality.component.scss'],
  providers: [ DecimalPipe]

})
export class CertQualityComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;

  invoiceNumbers=[];
  packingListNumbers=[];
  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Packing' }, { label: 'Certificate of Quality', active: true }];
    this.invoiceNumbers = ['IEPL/0148/22-23','IEPL/0150/22-23','IEPL/0151/22-23','IEPL/0152/22-23'];
    this.packingListNumbers = ['1001(MRKU986754SH)','1002(MRKU986754SH)'];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
