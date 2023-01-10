import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ DecimalPipe]

})
export class ProfileComponent implements OnInit {
  
  breadCrumbItems: Array<{}>;

  hideme: boolean[] = [false,false,true];

  constructor() {
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Profile' }];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

  showInspectionReport(){
    
  }

}
