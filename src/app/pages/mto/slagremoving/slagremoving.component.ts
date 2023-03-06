import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { FluxMixingService } from "./../fluxmixing/fluxmixing.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";
import { SlagRemovingService } from "./slagremoving.service";
import { MTOSlagRemovalService } from "src/app/core/services/mto/mtoslagremoval.service";

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

  parentReports: Array<{}> = [
    {
      name: "Flux Mixing",
      heading: this.fluxmixingHeadingArray,
      body: this.fluxmixingBodyArray,
      children: true,
    },
    {
      name: "Melting",
      heading: this.meltingHeadingArray,
      body: this.meltingBodyArray,
      children: true,
    },
    {
      name: "Material Loading",
      heading: this.meltingHeadingArray,
      body: this.meltingBodyArray,
      children: true,
    },
  ];

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
        response.Data.records.forEach((item) => {
          this.bodyArray.push([
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
            { value: item["slag_removal_time"] },
          ]);
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
