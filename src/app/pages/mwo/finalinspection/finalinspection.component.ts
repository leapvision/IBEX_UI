import { Component, OnInit, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { WizardComponent } from "angular-archwizard";
import { MWOBuffingAndPolishingService } from "src/app/core/services/mwo/mwobuffingandpolishing.service";
import { MWOCompositionCheckService } from "src/app/core/services/mwo/mwocomposition.service";
import { MWOIngotPouringService } from "src/app/core/services/mwo/mwoingotpouring.service";
import { MWOPrintingService } from "src/app/core/services/mwo/mwoprinting.service";
import { MWOSlagRemovalService } from "src/app/core/services/mwo/mwoslagremoval.service";
import { MWOTransferToMWOService } from "src/app/core/services/mwo/mwotransfertomwo.service";
import { MWOVisualInspectionService } from "src/app/core/services/mwo/mwovisualinspection.service";
import { MWOFinalInspectionService } from "src/app/core/services/mwo/mwofinalinspection.service";

@Component({
  selector: "app-finalinspection",
  templateUrl: "./finalinspection.component.html",
  styleUrls: ["./finalinspection.component.scss"],
  providers: [DecimalPipe],
})
export class FinalInspectionComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;

  finalHeatNumbers = [];

  mwoFinalInspectionForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  remarks: string[];

  constructor(
    public fb: FormBuilder,
    private mwoTransferToMWOService: MWOTransferToMWOService,
    private mwoSlagRemovalService: MWOSlagRemovalService,
    private mwoCompositionCheckService: MWOCompositionCheckService,
    private mwoIngotPouringService: MWOIngotPouringService,
    private mwoVisualInspectionService: MWOVisualInspectionService,
    private mwoBuffingAndPolishingService: MWOBuffingAndPolishingService,
    private mwoPrintingService: MWOPrintingService,
    private mwoFinalInspectionService: MWOFinalInspectionService
  ) {}

  finalInspectionHeadingArray = this.mwoFinalInspectionService.headingArray;
  finalInspectionBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Final Inspection", active: true },
    ];

    this.remarks = ["Reason 1", "Reason 2", "Reason 3"];

    this.formInit();

    this.fetchFinalHeatNumbers();

    this.fetchMWOFinalInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mwoFinalInspectionForm = this.fb.group({
      finalInspectionFinalHeatNumberGroup: this.fb.group({
        final_heat_no: [null, Validators.required],
      }),
      ingotFinalInspectionGroup: this.fb.group({
        total_no_of_printed_ingots: [null, Validators.required],
        total_printed_ingots_quantity: [null, Validators.required],
        no_of_ok_printed_ingots: [null, Validators.required],
        no_of_ok_printed_ingots_quantity: [null, Validators.required],
        no_of_not_ok_printed_ingots: [null, Validators.required],
        no_of_not_ok_printed_ingots_quantity: [null, Validators.required],
        remarks: [null, Validators.required],
      }),
    });
  }

  fetchFinalHeatNumbers() {
    let response;
    this.mwoFinalInspectionService
      .getAllReadyForFinalInspection()
      .subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        this.finalHeatNumbers = response.Data;
      });
  }

  get form() {
    return this.mwoFinalInspectionForm.controls;
  }

  remarksSelected(value) {
    if (value) {
      this.isRemarksAvailable = true;
    }
  }

  onMwoFinalInspectionFormSubmit() {
    let response;

    let finalInspectionData = {
      print_id: this.finalHeatNumbers.find(
        (item) =>
          item.buffing_polishing_details.vis_ins_details.ingots_pouring_details
            .final_heat_no ===
          this.form.finalInspectionFinalHeatNumberGroup.value["final_heat_no"]
      ).id,
      total_ingots:
        this.form.ingotFinalInspectionGroup.value["total_no_of_printed_ingots"],
      total_ingots_qty:
        this.form.ingotFinalInspectionGroup.value[
          "total_printed_ingots_quantity"
        ],
      ok_ingots:
        this.form.ingotFinalInspectionGroup.value["no_of_ok_printed_ingots"],
      ok_ingots_qty:
        this.form.ingotFinalInspectionGroup.value[
          "no_of_ok_printed_ingots_quantity"
        ],
      not_ok_ingots:
        this.form.ingotFinalInspectionGroup.value[
          "no_of_not_ok_printed_ingots"
        ],
      not_ok_ingots_qty:
        this.form.ingotFinalInspectionGroup.value[
          "no_of_not_ok_printed_ingots_quantity"
        ],
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.ingotFinalInspectionGroup.value["remarks"],
    };

    // console.log(finalInspectionData)

    this.mwoFinalInspectionService
      .addFinalInspection(finalInspectionData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mwoPrintingService
            .updateReadyForFinalInspection({
              id: finalInspectionData.print_id,
              move_to_final_inspection: true,
            })
            .subscribe((result) => {
              if (result != null) {
                response = result;
              }
              if (response.Result === "Success") {
                this.mwoFinalInspectionForm.reset();
                this.formInit();
                this.wizard.reset();
                this.fetchFinalHeatNumbers();
                this.fetchMWOFinalInspectionReport(
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

  fetchMWOFinalInspectionReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoFinalInspectionService
      .getAllFinalInspectionReport(pageSize, pageNumber, searchValue)
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
              name: "Printing",
              heading: this.mwoPrintingService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["print_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    { value: item["print_details"]["final_heat_no"] },
                    {
                      value: item["print_details"]["total_ingots"],
                    },
                    {
                      value: item["print_details"]["total_ingots_qty"],
                    },
                    {
                      value: item["print_details"]["ok_ingots"],
                    },
                    {
                      value: item["print_details"]["ok_ingots_qty"],
                    },
                    {
                      value: item["print_details"]["not_ok_ingots"],
                    },
                    {
                      value: item["print_details"]["not_ok_ingots_qty"],
                    },
                    {
                      isStatusButton: true,
                      innerText: "Complete",
                      success: true,
                    },

                    {
                      value: item["print_details"]["remarks"],
                    },
                  ],
                },
              ],
              children: true,
            },

            {
              name: "Buffing And Polishing",
              heading: this.mwoBuffingAndPolishingService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["print_details"]["buffing_polishing_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "final_heat_no"
                        ],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "total_ingots"
                        ],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "total_ingots_qty"
                        ],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "ok_ingots"
                        ],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "ok_ingots_qty"
                        ],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "not_ok_ingots"
                        ],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "not_ok_ingots_qty"
                        ],
                    },
                    {
                      isStatusButton: true,
                      innerText: "Complete",
                      success: true,
                    },
                    {
                      isStatusButton: true,
                      innerText: "Complete",
                      success: true,
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "remarks"
                        ],
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Visual Inspection",
              heading: this.mwoVisualInspectionService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["final_heat_no"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["total_ingots"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["total_ingots_qty"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ok_ingots"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ok_ingots_qty"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["not_ok_ingots"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["not_ok_ingots_qty"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["remarks"],
                    },
                  ],
                },
              ],
              children: true,
            },
            {
              name: "Ingots Pouring",
              heading: this.mwoIngotPouringService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["hold_no"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["pouring_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["print_details"]["buffing_polishing_details"]["vis_ins_details"]["ingots_pouring_details"]["image_path"]}`,
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["pouring_time"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["pouring_quantity"],
                    },

                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["no_of_ingots"],
                    },

                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["ingots_weight"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["final_heat_no"],
                    },
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
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["hold_no"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_1"
                        ]["sample"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_2"
                        ]["sample"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_3"
                        ]["sample"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "spectro_sample_4"
                        ]["sample"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
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
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
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
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
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
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["tapping_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["print_details"]["buffing_polishing_details"]["vis_ins_details"]["ingots_pouring_details"]["mwo_ins_details"]["slag_removal_details"]["image_path"]}`,
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["slag_removal_time"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
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
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
                          "slag_removal_details"
                        ]["holding_details"]["melt_no"],
                    },
                    {
                      value:
                        item["print_details"]["buffing_polishing_details"][
                          "vis_ins_details"
                        ]["ingots_pouring_details"]["mwo_ins_details"][
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
              { isStatusButton: true, innerText: "Complete", success: true },
              {
                value: item["remarks"],
              },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.finalInspectionBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOFinalInspectionReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOFinalInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOFinalInspectionReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
