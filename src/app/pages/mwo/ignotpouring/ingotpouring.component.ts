import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-ingotpouring',
  templateUrl: './ingotpouring.component.html',
  styleUrls: ['./ingotpouring.component.scss'],
  providers: [ DecimalPipe]

})
export class IngotPouringComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;

  constructor() {
    this.breadCrumbItems = [{ label: 'MWO' }, { label: 'Ignot Pouring', active: true }];
  }

  ngOnInit(): void {
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
