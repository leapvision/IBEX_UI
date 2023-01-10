import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-melting',
  templateUrl: './melting.component.html',
  styleUrls: ['./melting.component.scss'],
  providers: [ DecimalPipe]

})
export class MeltingComponent implements OnInit {
  
  breadCrumbItems: Array<{}>;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'MTO' }, { label: 'Melting', active: true }];
  }

}
