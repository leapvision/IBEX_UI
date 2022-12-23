import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-fluxmixing',
  templateUrl: './fluxmixing.component.html',
  styleUrls: ['./fluxmixing.component.scss'],
  providers: [ DecimalPipe]

})
export class FluxMixingComponent implements OnInit {
  
  hideme: boolean[] = [false,false,true];


  constructor() {
  }

  ngOnInit(): void {
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

}
