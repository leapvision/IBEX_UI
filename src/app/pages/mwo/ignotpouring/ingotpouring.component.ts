import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { IgnotPouringService } from "./ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";

@Component({
  selector: "app-ingotpouring",
  templateUrl: "./ingotpouring.component.html",
  styleUrls: ["./ingotpouring.component.scss"],
  providers: [DecimalPipe],
})
export class IngotPouringComponent implements OnInit {
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService,
    private ingotpouringService: IgnotPouringService
  ) {}

  transfertomwoHeadingArray =
    this.transfertomwoService.getTransferToMwoReport().heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReport().body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReport().heading;
  slagremovingBodyArray = this.slagremovingService.getSlagRemovingReport().body;
  mwoinspectionHeadingArray =
    this.mwoinspectionService.getMwoInspectionReport().heading;
  mwoinspectionBodyArray =
    this.mwoinspectionService.getMwoInspectionReport().body;
  ingotpouringHeadingArray =
    this.ingotpouringService.getIgnotPouringReport().heading;
  ingotpouringBodyArray = this.ingotpouringService.getIgnotPouringReport().body;
  parentReports: Array<{}> = [
    {
      name: "Slag Removal",
      heading: this.slagremovingHeadingArray,
      body: this.slagremovingBodyArray,
    },
    {
      name: "Transfer to MWO",
      heading: this.transfertomwoHeadingArray,
      body: this.transfertomwoBodyArray,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Ignot Pouring", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
