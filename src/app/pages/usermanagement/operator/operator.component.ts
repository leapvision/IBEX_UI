import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';

@Component({
  selector: 'app-operator-management',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss']
})
export class OperatorManagementComponent implements OnInit {

  isVisible: string;

  transactions: Array<[]>;
  // statData: Array<[]>;

  isActive: string;

  statData = [{
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
    "value": "500KG",
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

  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.openModal();
    // }, 2000);
  }


  openModal() {
    this.modalService.open(this.content, { centered: true });
  }




  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
   changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }
}
