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
  hideme: boolean[] = [false, false, true];
  breadCrumbItems: Array<{}>;

  constructor(
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService
  ) {}

  transfertomwoHeadingArray =
    this.transfertomwoService.getTransferToMwoReport().heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReport().body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReport().heading;
  slagremovingBodyArray = this.slagremovingService.getSlagRemovingReport().body;
  parentReports: Array<{}> = [
    {
      name: "Transfer to MWO",
      heading: this.transfertomwoHeadingArray,
      body: this.transfertomwoBodyArray,
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Slag Removing", active: true },
    ];
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }
}
