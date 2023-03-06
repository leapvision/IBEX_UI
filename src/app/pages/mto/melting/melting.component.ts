import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "./melting.service";
import { MaterialLoadingService } from "../loadingofrm/loadingofrm.service";
import { MTOMeltingService } from "src/app/core/services/mto/mtomelting.service";

@Component({
  selector: "app-melting",
  templateUrl: "./melting.component.html",
  styleUrls: ["./melting.component.scss"],
  providers: [DecimalPipe],
})
export class MeltingComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";

  hideme: boolean[] = [];

  bodyArray = [];
  paginationDetails = {};

  constructor(
    private materialLoadingService: MaterialLoadingService,
    private meltingService: MeltingService,
    private mtoMeltingService: MTOMeltingService
  ) {}

  materialLoadingHeadingArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).heading;
  materialLoadingBodyArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).body;
  meltingHeadingArray = this.mtoMeltingService.headingArray;
  meltingBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Melting", active: true },
    ];

    this.fetchMTOMeltingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  fetchMTOMeltingReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mtoMeltingService
      .getAllMeltingReport(pageSize, pageNumber, searchValue)
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
              name: "Material Loading",
              heading: this.materialLoadingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["loading_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value: item["loading_details"]["melt_no"],
                    },
                    {
                      value:
                        item["loading_details"]["sfg_prod_order_details"]["id"],
                    },
                    {
                      value:
                        item["loading_details"]["sfg_prod_order_details"][
                          "alloy_name"
                        ],
                    },
                    {
                      value:
                        item["loading_details"]["sfg_prod_order_details"][
                          "scrap_weight"
                        ],
                    },
                    { viewDetails: true },
                  ],
                },
              ],
              children: true,
            },
          ];
          this.bodyArray.push({
            currentReport: [
              {
                value: new Date(item["created_on"]).toLocaleDateString("en-GB"),
              },
              { value: item["shift_details"]["name"] },
              { value: item["loading_details"]["melt_no"] },
              { value: item["melting_temp"] },
              {
                img: `http://localhost:8000${item["image_path"]}`,
              },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.meltingBodyArray = this.bodyArray;
        // console.log(this.scrappurchaseBodyArray);

        // let materialLoadingReport = {
        //   name: "Material Loading",
        //   heading: this.materialLoadingHeadingArray,
        //   body: this.materialLoadingBodyArray,
        //   children: true,
        // };
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMTOMeltingReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMTOMeltingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    debugger;
    this.searchValue = searchTerm;
    this.fetchMTOMeltingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
