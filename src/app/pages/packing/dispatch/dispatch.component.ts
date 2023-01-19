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
  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Packing' }, { label: 'Dispatch', active: true }];
    this.containerNumbers = ['MRKU09876SH','MRKU098456SH']
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
