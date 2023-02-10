import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { ScrapPurchaseService } from "./scrappurchase.service";

@Component({
  selector: "app-scrappurchase",
  templateUrl: "./scrappurchase.component.html",
  styleUrls: ["./scrappurchase.component.scss"],
  providers: [DecimalPipe],
})
export class ScrapPurchaseComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  grnNumbers = [];

  constructor(private scrappurchaseService: ScrapPurchaseService) {}

  scrappurchaseHeadingArray =
    this.scrappurchaseService.getScrapPurchaseReport().heading;
  scrappurchaseBodyArray =
    this.scrappurchaseService.getScrapPurchaseReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scrap Management" },
      { label: "Inward Scrap", active: true },
    ];
    this.grnNumbers = ["1", "2", "3", "4", "5"];
  }
}
