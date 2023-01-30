import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import {
  OrderSortableService,
  SortEvent,
} from "./loadingofrm-sortable.directive";

import { OrderService } from "./loadingofrm.service";
import { Orders } from "./loadingofrm.model";
import { ordersData } from "./data";

@Component({
  selector: "app-loadingofrm",
  templateUrl: "./loadingofrm.component.html",
  styleUrls: ["./loadingofrm.component.scss"],
  providers: [OrderService, DecimalPipe],
})
export class LoadingOfRmComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  productionOrderNumbers = [];
  vendors = [];

  ordersData: Orders[];

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
      { label: "MTO" },
      { label: "Loading of Raw Material", active: true },
    ];

    this.ordersData = ordersData;
    this.productionOrderNumbers = ["1", "2", "3", "4", "5"];
    this.vendors = ["CMR", "Steel Line India", "Sunland"];
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
