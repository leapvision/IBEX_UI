import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-slagremoving',
  templateUrl: './slagremoving.component.html',
  styleUrls: ['./slagremoving.component.scss'],
  providers: [ DecimalPipe]

})
export class SlagRemovingComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];

  breadCrumbItems: Array<{}>;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'MTO' }, { label: 'Slag Removing', active: true }];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
