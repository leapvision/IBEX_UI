import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MaterialLoadingService } from "./loadingofrm.service";

@Component({
  selector: "app-loadingofrm",
  templateUrl: "./loadingofrm.component.html",
  styleUrls: ["./loadingofrm.component.scss"],
  providers: [DecimalPipe],
})
export class LoadingOfRmComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  productionOrderNumbers = [];
  vendors = [];

  constructor(private materialLoadingService: MaterialLoadingService) {}

  materialLoadingHeadingArray =
    this.materialLoadingService.getMaterialLoadingReport().heading;
  materialLoadingBodyArray =
    this.materialLoadingService.getMaterialLoadingReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Loading of Raw Material", active: true },
    ];

    this.productionOrderNumbers = ["1", "2", "3", "4", "5"];
    this.vendors = ["CMR", "Steel Line India", "Sunland"];
  }
}
