import { ScrapInspectionService } from "./scrapinspection.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-scrapinspection",
  templateUrl: "./scrapinspection.component.html",
  styleUrls: ["./scrapinspection.component.scss"],
  providers: [DecimalPipe],
})
export class ScrapInspectionComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;

  hideme: boolean[] = [];

  public isCollapsed = true;

  constructor(private scrapinspectionService: ScrapInspectionService) {}

  scrapinspectionHeadingArray =
    this.scrapinspectionService.getScrapInspectionReport().heading;
  scrapinspectionBodyArray =
    this.scrapinspectionService.getScrapInspectionReport().body;

  parentReports: Array<{}> = [
    {
      spectroReports: true,
      name: "Sample Spectro Reports",
      samples: [
        {
          name: "Sample 1",
          data: this.scrapinspectionService.samplesArray,
        },
      ],
    },
  ];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scrap Management" },
      { label: "Inward Scrap", active: true },
    ];
  }

  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }
}
