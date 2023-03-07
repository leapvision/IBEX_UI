import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { FluxMixingService } from "./../fluxmixing/fluxmixing.service";
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "../melting/melting.service";
import { SlagRemovingService } from "./slagremoving.service";
import { MTOSlagRemovalService } from "src/app/core/services/mto/mtoslagremoval.service";
import { convertTime } from "src/app/core/helpers/functions";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WizardComponent } from "angular-archwizard";

@Component({
  selector: "app-slagremoving",
  templateUrl: "./slagremoving.component.html",
  styleUrls: ["./slagremoving.component.scss"],
  providers: [DecimalPipe],
})
export class SlagRemovingComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;

  mtoSlagRemovalForm: FormGroup;

  hideme: boolean[] = [];

  meltNumbers = [];

  bodyArray = [];
  paginationDetails = {};

  constructor(
    private fb: FormBuilder,
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

    this.formInit();

    this.fetchMeltNumbers();

    this.fetchMTOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mtoSlagRemovalForm = this.fb.group({
      slagRemovalMeltNumberGroup: this.fb.group({
        melt_no: [null, Validators.required],
      }),
      slagRemovalQuantityGroup: this.fb.group({
        quantity: [null, Validators.required],
      }),
      slagRemovalTimeGroup: this.fb.group({
        time: [null, Validators.required],
      }),
      remarksGroup: this.fb.group({
        remarks: [""],
      }),
    });
  }

  remarks(value) {
    if (value && value.length > 0) {
      this.isRemarksAvailable = true;
    }
  }

  fetchMeltNumbers() {
    let response;
    this.mtoslagremovalService
      .getAllReadyForSlagRemoval()
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        this.meltNumbers = response.Data;
      });
  }

  get form() {
    return this.mtoSlagRemovalForm.controls;
  }

  onMtoSlagRemovalFormSubmit() {
    console.log(this.mtoSlagRemovalForm.value);
    let response;

    let slagRemovalData = {
      flux_id: 10002,
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      slag_quantity: this.form.slagRemovalQuantityGroup.value["quantity"],
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.remarksGroup.value["remarks"],
    };

    this.mtoslagremovalService
      .addSlagRemoval(slagRemovalData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mtoSlagRemovalForm.reset();
          this.formInit();
          this.wizard.reset();
          this.fetchMeltNumbers();
          this.fetchMTOSlagRemovalReport(
            this.pageSize,
            this.pageNumber,
            this.searchValue
          );
        } else {
          alert("Something went wrong!🥲");
        }
      });
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
              { value: item["slag_removal_time"] },
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
