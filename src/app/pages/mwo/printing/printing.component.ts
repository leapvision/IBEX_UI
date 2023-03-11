import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { PrintingService } from "./printing.service";
import { BuffingAndPolishingService } from "../buffingandpolishing/buffingandpolishing.service";
import { IgnotPouringService } from "../ingotpouring/ingotpouring.service";
import { MwoInspectionService } from "../mwoinspection/mwoinspection.service";
import { SlagRemovingService } from "../slagremoving/slagremoving.service";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { VisualInspectionService } from "../visualinspection/visualinspection.service";
import { WizardComponent } from "angular-archwizard";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MWOBuffingAndPolishingService } from "src/app/core/services/mwo/mwobuffingandpolishing.service";
import { MWOCompositionCheckService } from "src/app/core/services/mwo/mwocomposition.service";
import { MWOIngotPouringService } from "src/app/core/services/mwo/mwoingotpouring.service";
import { MWOSlagRemovalService } from "src/app/core/services/mwo/mwoslagremoval.service";
import { MWOTransferToMWOService } from "src/app/core/services/mwo/mwotransfertomwo.service";
import { MWOVisualInspectionService } from "src/app/core/services/mwo/mwovisualinspection.service";
import { MWOPrintingService } from "src/app/core/services/mwo/mwoprinting.service";

@Component({
  selector: "app-printing",
  templateUrl: "./printing.component.html",
  styleUrls: ["./printing.component.scss"],
  providers: [DecimalPipe],
})
export class PrintingComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;

  finalHeatNumbers = [];

  mwoPrintingForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  constructor(
    public fb: FormBuilder,
    private mwoTransferToMWOService: MWOTransferToMWOService,
    private mwoSlagRemovalService: MWOSlagRemovalService,
    private mwoCompositionCheckService: MWOCompositionCheckService,
    private mwoIngotPouringService: MWOIngotPouringService,
    private mwoVisualInspectionService: MWOVisualInspectionService,
    private mwoBuffingAndPolishingService: MWOBuffingAndPolishingService,
    private mwoPrintingService: MWOPrintingService
  ) {}

  printingHeadingArray = this.mwoPrintingService.headingArray;
  printingBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Heat Number Printing", active: true },
    ];

    this.formInit();

    this.fetchFinalHeatNumbers();

    this.fetchMWOPrintingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mwoPrintingForm = this.fb.group({
      printingFinalHeatNumberGroup: this.fb.group({
        final_heat_no: [null, Validators.required],
      }),
      printingGroup: this.fb.group({
        printing_status: [null, Validators.required],
      }),
      remarksGroup: this.fb.group({
        remarks: [""],
      }),
    });
  }

  fetchFinalHeatNumbers() {
    let response;
    this.mwoPrintingService.getAllReadyForPrinting().subscribe((result) => {
      if (result != null) {
        response = result;
        console.log(response);
      }
      this.finalHeatNumbers = response.Data;
    });
  }

  get form() {
    return this.mwoPrintingForm.controls;
  }

  remarks(value) {
    if (value) {
      this.isRemarksAvailable = true;
    }
  }

  onMwoPrintingFormSubmit() {
    let response;

    let printingData = {
      buffing_polishing_id: this.finalHeatNumbers.find(
        (item) =>
          item.vis_ins_details.ingots_pouring_details.final_heat_no ===
          this.form.printingFinalHeatNumberGroup.value["final_heat_no"]
      ).id,
      printing: this.form.printingGroup.value["printing_status"],
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.remarksGroup.value["remarks"],
    };

    // console.log(printingData)

    this.mwoPrintingService.addPrinting(printingData).subscribe((result) => {
      if (result != null) {
        response = result;
      }
      console.log(response);
      if (response.Result === "Success") {
        this.mwoBuffingAndPolishingService
          .updateReadyForPrinting({
            id: printingData.buffing_polishing_id,
            move_to_printing: true,
          })
          .subscribe((result) => {
            if (result != null) {
              response = result;
            }
            if (response.Result === "Success") {
              this.mwoPrintingForm.reset();
              this.formInit();
              this.wizard.reset();
              this.fetchFinalHeatNumbers();
              this.fetchMWOPrintingReport(
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

  fetchMWOPrintingReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoPrintingService
      .getAllPrintingReport(pageSize, pageNumber, searchValue)
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
              name: "Buffing And Polishing",
              heading: this.mwoBuffingAndPolishingService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["buffing_polishing_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value: item["buffing_polishing_details"]["final_heat_no"],
                    },
                    {
                      value: item["buffing_polishing_details"]["total_ingots"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["total_ingots_qty"],
                    },
                    {
                      value: item["buffing_polishing_details"]["ok_ingots"],
                    },
                    {
                      value: item["buffing_polishing_details"]["ok_ingots_qty"],
                    },
                    {
                      value: item["buffing_polishing_details"]["not_ok_ingots"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["not_ok_ingots_qty"],
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
                      value: item["buffing_polishing_details"]["remarks"],
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
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "final_heat_no"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "total_ingots"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "total_ingots_qty"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ok_ingots"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ok_ingots_qty"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "not_ok_ingots"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "not_ok_ingots_qty"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "remarks"
                        ],
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
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["hold_no"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["pouring_temp"],
                    },
                    {
                      img: `http://localhost:8000${item["buffing_polishing_details"]["vis_ins_details"]["ingots_pouring_details"]["image_path"]}`,
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["pouring_time"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["pouring_quantity"],
                    },

                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["no_of_ingots"],
                    },

                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["ingots_weight"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["final_heat_no"],
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
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["hold_no"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["spectro_sample_1"]["sample"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["spectro_sample_2"]["sample"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["spectro_sample_3"]["sample"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["spectro_sample_4"]["sample"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["spectro_sample_5"]["sample"],
                    },
                    {
                      isButton: true,
                      innerText: "Moved to MWO",
                      success: true,
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["remarks"],
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
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "shift_details"
                        ]["name"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["hold_no"],
                    },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "tapping_temp"
                        ],
                    },
                    {
                      img: `http://localhost:8000${item["buffing_polishing_details"]["vis_ins_details"]["ingots_pouring_details"]["mwo_ins_details"]["slag_removal_details"]["image_path"]}`,
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "slag_removal_time"
                        ],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "slag_quantity"
                        ],
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
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["melt_no"],
                    },
                    {
                      value:
                        item["buffing_polishing_details"]["vis_ins_details"][
                          "ingots_pouring_details"
                        ]["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["hold_no"],
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
        this.printingBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOPrintingReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOPrintingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOPrintingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
