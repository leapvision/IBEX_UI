import { Component, OnInit, ViewChild } from '@angular/core';
import { emailSentBarChart, monthlyEarningChart } from './data';
import { ChartType } from './admin.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-default',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminPanelComponent implements OnInit {

  isVisible: string;

  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions: Array<[]>;
  // statData: Array<[]>;

  isActive: string;

  statData = [{
    "icon": "bx bx-copy-alt",
    "title": "Total Ingots Weight",
    "value": "400KG"
  }, {
    "icon": "bx bx-archive-in",
    "title": "Total Final Heat Numbers",
    "value": "200"
  },{
    "icon": "bx bx-purchase-tag-alt",
    "title": "Total Dispatched Weight",
    "value": "1000KG",
  }];

  @ViewChild('content') content;
  constructor(private modalService: NgbModal, private configService: ConfigService, private eventService: EventService) {
  }

  ngOnInit() {

    /**
     * horizontal-vertical layput set
     */
     const attribute = document.body.getAttribute('data-layout');

     this.isVisible = attribute;
     const vertical = document.getElementById('layout-vertical');
     if (vertical != null) {
       vertical.setAttribute('checked', 'true');
     }
     if (attribute == 'horizontal') {
       const horizontal = document.getElementById('layout-horizontal');
       if (horizontal != null) {
         horizontal.setAttribute('checked', 'true');
         console.log(horizontal);
       }
     }

    /**
     * Fetches the data
     */
    this.fetchData();
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.openModal();
    // }, 2000);
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;

    this.isActive = 'year';
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
      // this.statData = data.statData;
    });
  }

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  weeklyreport() {
    this.isActive = 'week';
    this.emailSentBarChart.series =
      [{
        name: 'Line 1',
         data: [44, 55, 41, 67, 22, 4, 10]
      }, {
        name: 'Line 2',
        data: [11, 17, 15, 15, 21, 14, 11]
      }];
    this.emailSentBarChart.xaxis = {
      categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    };

    this.statData = [{
      "icon": "bx bx-copy-alt",
      "title": "Total Ingots Weight",
      "value": "100KG"
    }, {
      "icon": "bx bx-archive-in",
      "title": "Total Final Heat Numbers",
      "value": "50"
    },{
      "icon": "bx bx-purchase-tag-alt",
      "title": "Total Dispatched Weight",
      "value": "400KG",
    }];
  }

  monthlyreport() {
    this.isActive = 'month';
    this.emailSentBarChart.series =
      [{
        name: 'Line 1',
         data: [44, 55, 41, 67, 22]
      }, {
        name: 'Line 2',
        data: [13, 23, 20, 8, 13]
      }];
    this.emailSentBarChart.xaxis = {
      categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    };

    this.statData = [{
      "icon": "bx bx-copy-alt",
      "title": "Total Ingots Weight",
      "value": "200KG"
    }, {
      "icon": "bx bx-archive-in",
      "title": "Total Final Heat Numbers",
      "value": "100"
    },{
      "icon": "bx bx-purchase-tag-alt",
      "title": "Total Dispatched Weight",
      "value": "800KG",
    }];
  }

  yearlyreport() {
    this.isActive = 'year';
    this.emailSentBarChart.series =
      [{
        name: 'Line 1',
         data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Line 2',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }];
    this.emailSentBarChart.xaxis = {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    };

    this.statData = [{
      "icon": "bx bx-copy-alt",
      "title": "Total Ingots Weight",
      "value": "400KG"
    }, {
      "icon": "bx bx-archive-in",
      "title": "Total Final Heat Numbers",
      "value": "200"
    },{
      "icon": "bx bx-purchase-tag-alt",
      "title": "Total Dispatched Weight",
      "value": "1000KG",
    }];
  }


  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
   changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }
}
