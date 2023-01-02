import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-packingingots',
  templateUrl: './packingingots.component.html',
  styleUrls: ['./packingingots.component.scss'],
  providers: [ DecimalPipe]

})
export class PackingIngotsComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;


  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Packing' }, { label: 'Ingots', active: true }];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
