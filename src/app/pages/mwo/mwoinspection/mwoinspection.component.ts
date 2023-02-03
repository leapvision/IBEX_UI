import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { SlagRemovingService } from "../../mto/slagremoving/slagremoving.service";
import { MwoInspectionService } from "./mwoinspection.service";

@Component({
  selector: "app-mwoinspection",
  templateUrl: "./mwoinspection.component.html",
  styleUrls: ["./mwoinspection.component.scss"],
  providers: [DecimalPipe],
})
export class MWOInspectionComponent implements OnInit {
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoinspectionService: MwoInspectionService
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
      { label: "Composition Check", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
