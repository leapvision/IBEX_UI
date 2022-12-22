import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-scrapinspection',
  templateUrl: './scrapinspection.component.html',
  styleUrls: ['./scrapinspection.component.scss'],
  providers: [ DecimalPipe]

})
export class ScrapInspectionComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;


  constructor() {

  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Scrap Management' }, { label: 'Scrap Purchase', active: true }];
  }

}
