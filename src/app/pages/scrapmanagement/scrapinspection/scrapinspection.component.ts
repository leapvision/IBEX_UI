import { InwardScrapInspectionService } from "./../../../core/services/scrapmanagement/inwardscrapinspection.service";
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

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";

  hideme: boolean[] = [];

  bodyArray = [];
  paginationDetails = {};

  public isCollapsed = true;

  constructor(
    private scrapinspectionService: ScrapInspectionService,
    private inwardscrapinspectionService: InwardScrapInspectionService
  ) {}

  scrapinspectionHeadingArray = this.inwardscrapinspectionService.headingArray;
  scrapinspectionBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scrap Management" },
      { label: "Inward Scrap Inspection", active: true },
    ];

    this.fetchInwardScrapInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  fetchInwardScrapInspectionReport(pageSize, pageNumber, searchValue) {
    let response;
    this.inwardscrapinspectionService
      .getAllInwardScrapInspection(pageSize, pageNumber, searchValue)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        this.paginationDetails = {};
        this.paginationDetails = response.Data.pagination;
        this.paginationData = this.paginationDetails;
        // console.log(response.Data.pagination);
        // console.log(response.Data.records);
        this.bodyArray = [];
        this.parentsReports = [];
        response.Data.records.forEach((item) => {
          this.parentsReports = [
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

          this.bodyArray.push({
            currentReport: [
              {
                value: new Date(item["created_on"]).toLocaleDateString("en-GB"),
              },
              { value: item["id"] },
              { value: item["alloy_name"] },
              { value: item["source"] },
              { value: item["weight"] },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.scrapinspectionBodyArray = this.bodyArray;
        // console.log(this.scrappurchaseBodyArray);
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchInwardScrapInspectionReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchInwardScrapInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchInwardScrapInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
