import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MWOVisualInspectionService } from "src/app/core/services/mwo/mwovisualinspection.service";
import { MWOTransferToMWOService } from "src/app/core/services/mwo/mwotransfertomwo.service";
import { MWOSlagRemovalService } from "src/app/core/services/mwo/mwoslagremoval.service";
import { MWOCompositionCheckService } from "src/app/core/services/mwo/mwocomposition.service";
import { MWOIngotPouringService } from "src/app/core/services/mwo/mwoingotpouring.service";
import { WizardComponent } from "angular-archwizard";

@Component({
  selector: "app-visualinspection",
  templateUrl: "./visualinspection.component.html",
  styleUrls: ["./visualinspection.component.scss"],
  providers: [DecimalPipe],
})
export class VisualInspectionComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;

  finalHeatNumbers = [];

  mwoVisualInspectionForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  remarks: string[];

  constructor(
    public fb: FormBuilder,
    private mwoTransferToMWOService: MWOTransferToMWOService,
    private mwoSlagRemovalService: MWOSlagRemovalService,
    private mwoCompositionCheckService: MWOCompositionCheckService,
    private mwoIngotPouringService: MWOIngotPouringService,
    private mwoVisualInspectionService: MWOVisualInspectionService
  ) {}

  visualinspectionHeadingArray = this.mwoVisualInspectionService.headingArray;
  visualinspectionBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Visual Inspection", active: true },
    ];

    this.remarks = ["Reason 1", "Reason 2", "Reason 3"];

    this.formInit();

    this.fetchFinalHeatNumbers();

    this.fetchMWOVisualInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mwoVisualInspectionForm = this.fb.group({
      visualInspectionFinalHeatNumberGroup: this.fb.group({
        final_heat_no: [null, Validators.required],
      }),
      ingotInspectionGroup: this.fb.group({
        total_no_of_ingots: [null, Validators.required],
        total_ingots_quantity: [null, Validators.required],
        no_of_ok_ingots: [null, Validators.required],
        no_of_ok_ingots_quantity: [null, Validators.required],
        no_of_not_ok_ingots: [null, Validators.required],
        no_of_not_ok_ingots_quantity: [null, Validators.required],
        remarks: [null, Validators.required],
      }),
    });
  }

  fetchFinalHeatNumbers() {
    let response;
    this.mwoVisualInspectionService
      .getAllReadyForVisualInspection()
      .subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        this.finalHeatNumbers = response.Data;
      });
  }

  get form() {
    return this.mwoVisualInspectionForm.controls;
  }

  remarksSelected(value) {
    if (value) {
      this.isRemarksAvailable = true;
    }
  }

  onMwoVisualInspectionFormSubmit() {
    let response;

    let visualInspectionData = {
      ingots_pouring_id: this.finalHeatNumbers.find(
        (item) =>
          item.final_heat_no ===
          this.form.visualInspectionFinalHeatNumberGroup.value["final_heat_no"]
      ).id,
      total_ingots: this.form.ingotInspectionGroup.value["total_no_of_ingots"],
      total_ingots_qty:
        this.form.ingotInspectionGroup.value["total_ingots_quantity"],
      ok_ingots: this.form.ingotInspectionGroup.value["no_of_ok_ingots"],
      ok_ingots_qty:
        this.form.ingotInspectionGroup.value["no_of_ok_ingots_quantity"],
      not_ok_ingots:
        this.form.ingotInspectionGroup.value["no_of_not_ok_ingots"],
      not_ok_ingots_qty:
        this.form.ingotInspectionGroup.value["no_of_not_ok_ingots_quantity"],
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.ingotInspectionGroup.value["remarks"],
    };

    this.mwoVisualInspectionService
      .addVisualInspection(visualInspectionData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mwoIngotPouringService
            .updateReadyForVisualInspection({
              id: visualInspectionData.ingots_pouring_id,
              move_to_vis_inspection: true,
            })
            .subscribe((result) => {
              if (result != null) {
                response = result;
              }
              if (response.Result === "Success") {
                this.mwoVisualInspectionForm.reset();
                this.formInit();
                this.wizard.reset();
                this.fetchFinalHeatNumbers();
                this.fetchMWOVisualInspectionReport(
                  this.pageSize,
                  this.pageNumber,
                  this.searchValue
                );
              } else {
                alert("Something went wrong!🥲");
              }
            });
        } else {
          alert("Something went wrong!🥲");
        }
      });
  }

  fetchMWOVisualInspectionReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoVisualInspectionService
      .getAllVisualInspectionReport(pageSize, pageNumber, searchValue)
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
              name: "Ingots Pouring",
              heading: this.mwoIngotPouringService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["ingots_pouring_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["hold_no"],
                    },
                    {
                      value: item["ingots_pouring_details"]["pouring_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["ingots_pouring_details"]["image_path"]}`,
                    },
                    {
                      value: item["ingots_pouring_details"]["pouring_time"],
                    },
                    {
                      value: item["ingots_pouring_details"]["pouring_quantity"],
                    },

                    { value: item["ingots_pouring_details"]["no_of_ingots"] },

                    { value: item["ingots_pouring_details"]["ingots_weight"] },
                    { value: item["ingots_pouring_details"]["final_heat_no"] },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Composition Check",
              heading: this.mwoCompositionCheckService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["hold_no"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_1"
                        ]["sample"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_2"
                        ]["sample"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_3"
                        ]["sample"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_4"
                        ]["sample"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_5"
                        ]["sample"],
                    },
                    {
                      isButton: true,
                      innerText: "Moved to MWO",
                      success: true,
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "remarks"
                        ],
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Slag Removal",
              heading: this.mwoSlagRemovalService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["hold_no"],
                    },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["tapping_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["ingots_pouring_details"]["mwo_ins_details"]["slag_removal_details"]["image_path"]}`,
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["slag_removal_time"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["slag_quantity"],
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Transfer To MWO",
              heading: this.mwoTransferToMWOService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["melt_no"],
                    },
                    {
                      value:
                        item["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["hold_no"],
                    },
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
              { value: item["final_heat_no"] },
              {
                value: item["total_ingots"],
              },
              {
                value: item["total_ingots_qty"],
              },
              {
                value: item["ok_ingots"],
              },
              {
                value: item["ok_ingots_qty"],
              },
              {
                value: item["not_ok_ingots"],
              },
              {
                value: item["not_ok_ingots_qty"],
              },
              {
                value: item["remarks"],
              },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.visualinspectionBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOVisualInspectionReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOVisualInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOVisualInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
