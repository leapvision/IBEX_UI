import { MaterialLoadingService } from "./../loadingofrm/loadingofrm.service";
import { MeltingService } from "./../melting/melting.service";
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FluxMixingService } from "../fluxmixing/fluxmixing.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { SlagInspectionService } from "./slaginspection.service";
import { MTOSlagInspectionService } from "src/app/core/services/mto/mtoslaginspection.service";
import { convertTime } from "src/app/core/helpers/functions";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WizardComponent } from "angular-archwizard";

@Component({
  selector: "app-slaginspection",
  templateUrl: "./slaginspection.component.html",
  styleUrls: ["./slaginspection.component.scss"],
  providers: [DecimalPipe],
})
export class SlagInspectionComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  mtoSlagInspectionForm: FormGroup;
  isRemarksAvailable: boolean = false;

  hideme: boolean[] = [];

  meltNumbers = [];

  bodyArray = [];
  paginationDetails = {};

  constructor(
    public fb: FormBuilder,
    private materialLoadingService: MaterialLoadingService,
    private meltingService: MeltingService,
    private fluxmixingService: FluxMixingService,
    private slagremovingService: SlagRemovingService,
    private slaginspectionService: SlagInspectionService,
    private mtoslaginspectionService: MTOSlagInspectionService
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
    this.fluxmixingService.getFluxMixingReportForMeltNumber("meltNumber")
      .heading;
  fluxmixingBodyArray =
    this.fluxmixingService.getFluxMixingReportForMeltNumber("meltNumber").body;
  slagremovingHeadingArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .heading;
  slagremovingBodyArray =
    this.slagremovingService.getSlagRemovingReportForMeltNumber("meltNumber")
      .body;

  slaginspectionHeadingArray = this.mtoslaginspectionService.headingArray;
  slaginspectionBodyArray = [];
  paginationData = {};

  parentsReports = [];

  inspectionSamples = [
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
    this.slaginspectionService.samplesArray,
  ];

  samplesArray = this.slaginspectionService.samplesArray;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Composition Check", active: true },
    ];

    this.formInit();

    this.fetchMeltNumbers();

    this.fetchMTOSlagInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mtoSlagInspectionForm = this.fb.group({
      slagInspectionMeltNumberGroup: this.fb.group({
        melt_no: [null, Validators.required],
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
    this.mtoslaginspectionService
      .getAllReadyForSlagInspection()
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        this.meltNumbers = response.Data;
      });
  }

  get form() {
    return this.mtoSlagInspectionForm.controls;
  }

  onMtoSlagInspectionFormSubmit() {
    console.log(this.mtoSlagInspectionForm.value);
    let response;

    let slagInspectionData = {
      slag_removal_id: 10002,
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.remarksGroup.value["remarks"],
    };

    this.mtoslaginspectionService
      .addSlagInspection(slagInspectionData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mtoSlagInspectionForm.reset();
          this.formInit();
          this.wizard.reset();
          this.fetchMeltNumbers();
          this.fetchMTOSlagInspectionReport(
            this.pageSize,
            this.pageNumber,
            this.searchValue
          );
        } else {
          alert("Something went wrong!🥲");
        }
      });
  }

  fetchMTOSlagInspectionReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mtoslaginspectionService
      .getAllSlagInspectionReport(pageSize, pageNumber, searchValue)
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
              name: "Slag Removal",
              heading: this.meltingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["slag_removal_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["slag_removal_details"]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["melt_no"],
                    },
                    { value: item["slag_removal_details"]["slag_quantity"] },
                    {
                      value: convertTime(
                        item["slag_removal_details"]["slag_removal_time"]
                      ),
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Flux Mixing",
              heading: this.meltingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["melt_no"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["melting_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["slag_removal_details"]["flux_details"]["melting_details"]["image_path"]}`,
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
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["melt_no"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["melting_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["slag_removal_details"]["flux_details"]["melting_details"]["image_path"]}`,
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
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["melt_no"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["sfg_prod_order_details"]["id"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["sfg_prod_order_details"][
                          "alloy_name"
                        ],
                    },
                    {
                      value:
                        item["slag_removal_details"]["flux_details"][
                          "melting_details"
                        ]["loading_details"]["sfg_prod_order_details"][
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
              {
                value:
                  item["slag_removal_details"]["flux_details"][
                    "melting_details"
                  ]["loading_details"]["melt_no"],
              },
              { value: item["spectro_sample_1"]["sample"] },
              { value: item["spectro_sample_2"]["sample"] },
              { value: item["spectro_sample_3"]["sample"] },
              { value: item["spectro_sample_4"]["sample"] },
              { value: item["spectro_sample_5"]["sample"] },
              { isButton: true, innerText: "Moved to MWO", success: true },
              { value: item["remarks"] },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.slaginspectionBodyArray = this.bodyArray;
        // console.log(this.scrappurchaseBodyArray);
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMTOSlagInspectionReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMTOSlagInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMTOSlagInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
