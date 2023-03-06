import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { FluxMixingService } from "./../fluxmixing/fluxmixing.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";
import { SlagRemovingService } from "./slagremoving.service";
import { MTOSlagRemovalService } from "src/app/core/services/mto/mtoslagremoval.service";
import { convertTime } from "src/app/core/helpers/functions";

@Component({
  selector: "app-slagremoving",
  templateUrl: "./slagremoving.component.html",
  styleUrls: ["./slagremoving.component.scss"],
  providers: [DecimalPipe],
})
export class SlagRemovingComponent implements OnInit {
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
    private fluxingService: FluxMixingService,
    private slagremovingService: SlagRemovingService,
    private mtoslagremovalService: MTOSlagRemovalService
  ) {}

  materialLoadingHeadingArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).heading;
  materialLoadingBodyArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).body;
  meltingHeadingArray =
    this.meltingService.getMeltingReportForMeltingNumber("meltNumber").heading;
  meltingBodyArray =
    this.meltingService.getMeltingReportForMeltingNumber("meltNumber").body;
  fluxmixingHeadingArray =
    this.fluxingService.getFluxMixingReportForMeltNumber("meltNumber").heading;
  fluxmixingBodyArray =
    this.fluxingService.getFluxMixingReportForMeltNumber("meltNumber").body;

  slagremovingHeadingArray = this.mtoslagremovalService.headingArray;
  slagremovingBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Slag Removing", active: true },
    ];

    this.fetchMTOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  fetchMTOSlagRemovalReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mtoslagremovalService
      .getAllSlagRemovalReport(pageSize, pageNumber, searchValue)
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
              name: "Flux Mixing",
              heading: this.meltingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["flux_details"]["melting_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "shift_details"
                        ]["name"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["melt_no"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"]["melting_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["flux_details"]["melting_details"]["image_path"]}`,
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Melting",
              heading: this.meltingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["flux_details"]["melting_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "shift_details"
                        ]["name"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["melt_no"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"]["melting_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["flux_details"]["melting_details"]["image_path"]}`,
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Material Loading",
              heading: this.materialLoadingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["melt_no"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["sfg_prod_order_details"]["id"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["sfg_prod_order_details"]["alloy_name"],
                    },
                    {
                      value:
                        item["flux_details"]["melting_details"][
                          "loading_details"
                        ]["sfg_prod_order_details"]["scrap_weight"],
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
              {
                value:
                  item["flux_details"]["melting_details"]["loading_details"][
                    "melt_no"
                  ],
              },
              { value: item["slag_quantity"] },
              { value: convertTime(item["slag_removal_time"]) },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.slagremovingBodyArray = this.bodyArray;
        // console.log(this.slagremovingBodyArray);
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMTOSlagRemovalReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMTOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMTOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
