import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-slaginspection',
  templateUrl: './slaginspection.component.html',
  styleUrls: ['./slaginspection.component.scss'],
  providers: [ DecimalPipe]

})
export class SlagInspectionComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];


  constructor() {
  }

  ngOnInit(): void {
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
