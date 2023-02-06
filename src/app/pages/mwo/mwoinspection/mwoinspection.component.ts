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
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .heading;
  slagremovingBodyArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .body;
  mwoinspectionHeadingArray =
    this.mwoinspectionService.getMwoInspectionReport().heading;
  mwoinspectionBodyArray =
    this.mwoinspectionService.getMwoInspectionReport().body;
  parentReports: Array<{}> = [
    {
      spectroReports: true,
      name: "Sample Spectro Reports",
      samples: [
        {
          name: "Sample 2",
          data: this.mwoinspectionService.samplesArray,
        },
        {
          name: "Sample 1",
          data: this.mwoinspectionService.samplesArray,
        },
      ],
    },
    {
      name: "Slag Removal",
      heading: this.slagremovingHeadingArray,
      body: this.slagremovingBodyArray,
      children: true,
    },
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
      { label: "Composition Check", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
