import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import {
  OrderSortableService,
  SortEvent,
} from "./scrappurchase-sortable.directive";

import { OrderService } from "./scrappurchase.service";
import { Orders } from "./scrappurchase.model";
import { ordersData } from "./data";

@Component({
  selector: "app-scrappurchase",
  templateUrl: "./scrappurchase.component.html",
  styleUrls: ["./scrappurchase.component.scss"],
  providers: [OrderService, DecimalPipe],
})
export class ScrapPurchaseComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;

  ordersData: Orders[];
  grnNumbers = [];

  orders$: Observable<Orders[]>;
  total$: Observable<number>;
  model: NgbDateStruct;
  @ViewChildren(OrderSortableService) headers: QueryList<OrderSortableService>;

  constructor(public service: OrderService) {
    this.orders$ = service.orders$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scrap Management" },
      { label: "Inward Scrap", active: true },
    ];
    this.grnNumbers = ["1", "2", "3", "4", "5"];

    this.ordersData = ordersData;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
