import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-slagremoval',
  templateUrl: './slagremoval.component.html',
  styleUrls: ['./slagremoval.component.scss'],
  providers: [ DecimalPipe]

})
export class SlagRemovalComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];
  breadCrumbItems: Array<{}>;

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'MWO' }, { label: 'Slag Removing', active: true }];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
