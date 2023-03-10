import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { SlagRemovingService } from "./slagremoving.service";

@Component({
  selector: "app-slagremoval",
  templateUrl: "./slagremoval.component.html",
  styleUrls: ["./slagremoval.component.scss"],
  providers: [DecimalPipe],
})
export class SlagRemovalComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService
  ) {}

  transfertomwoHeadingArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReport().heading;
  slagremovingBodyArray = this.slagremovingService.getSlagRemovingReport().body;
  parentReports: Array<{}> = [
    {
      name: "Transfer to MWO",
      heading: this.transfertomwoHeadingArray,
      body: this.transfertomwoBodyArray,
      children: true,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Slag Removing", active: true },
    ];
  }
}
