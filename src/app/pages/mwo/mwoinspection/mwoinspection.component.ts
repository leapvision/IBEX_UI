import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { SlagRemovingService } from "../../mto/slagremoving/slagremoving.service";
import { MwoInspectionService } from "./mwoinspection.service";
import { WizardComponent } from "angular-archwizard";
import { MWOCompositionCheckService } from "src/app/core/services/mwo/mwocomposition.service";
import { MWOTransferToMWOService } from "src/app/core/services/mwo/mwotransfertomwo.service";
import { MWOSlagRemovalService } from "src/app/core/services/mwo/mwoslagremoval.service";

@Component({
  selector: "app-mwoinspection",
  templateUrl: "./mwoinspection.component.html",
  styleUrls: ["./mwoinspection.component.scss"],
  providers: [DecimalPipe],
})
export class MWOInspectionComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;

  holdNumbers = [];

  mwoCompositionCheckForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  constructor(
    public fb: FormBuilder,
    private mwoTransferToMWOService: MWOTransferToMWOService,
    private mwoSlagRemovalService: MWOSlagRemovalService,
    private mwoCompositionCheckService: MWOCompositionCheckService
  ) {}

  mwoinspectionHeadingArray = this.mwoCompositionCheckService.headingArray;
  mwoinspectionBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Composition Check", active: true },
    ];

    this.formInit();

    this.fetchHoldNumbers();

    this.fetchMWOCompositionCheckReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  inspectionSamples = [
    this.mwoCompositionCheckService.samplesArray,
    this.mwoCompositionCheckService.samplesArray,
    this.mwoCompositionCheckService.samplesArray,
    this.mwoCompositionCheckService.samplesArray,
    this.mwoCompositionCheckService.samplesArray,
  ];

  formInit() {
    this.mwoCompositionCheckForm = this.fb.group({
      compositionCheckHoldNumberGroup: this.fb.group({
        hold_no: [null, Validators.required],
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

  fetchHoldNumbers() {
    let response;
    this.mwoCompositionCheckService
      .getAllReadyForCompositionCheck()
      .subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        this.holdNumbers = response.Data;
      });
  }

  get form() {
    return this.mwoCompositionCheckForm.controls;
  }

  onMwoCompositionCheckFormSubmit() {
    let response;

    let compositionCheckData = {
      slag_removal_id: this.holdNumbers.find(
        (item) =>
          item.holding_details.hold_no ===
          this.form.compositionCheckHoldNumberGroup.value["hold_no"]
      ).id,
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.remarksGroup.value["remarks"],
    };

    this.mwoCompositionCheckService
      .addCompositionCheck(compositionCheckData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mwoSlagRemovalService
            .updateReadyForCompositionCheck({
              id: compositionCheckData.slag_removal_id,
              move_to_inspection: true,
            })
            .subscribe((result) => {
              if (result != null) {
                response = result;
              }
              if (response.Result === "Success") {
                this.mwoCompositionCheckForm.reset();
                this.formInit();
                this.wizard.reset();
                this.fetchHoldNumbers();
                this.fetchMWOCompositionCheckReport(
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

  fetchMWOCompositionCheckReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoCompositionCheckService
      .getAllCompositionCheckReport(pageSize, pageNumber, searchValue)
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
              heading: this.mwoSlagRemovalService.headingArray,
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
                        item["slag_removal_details"]["holding_details"][
                          "hold_no"
                        ],
                    },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: 0 },
                    { value: item["slag_removal_details"]["tapping_temp"] },
                    {
                      img: `http://localhost:8000${item["slag_removal_details"]["image_path"]}`,
                    },
                    {
                      value: item["slag_removal_details"]["slag_removal_time"],
                    },
                    { value: item["slag_removal_details"]["slag_quantity"] },
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
                        item["slag_removal_details"]["holding_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["slag_removal_details"]["holding_details"][
                          "shift_details"
                        ]["name"],
                    },
                    {
                      value:
                        item["slag_removal_details"]["holding_details"][
                          "melt_no"
                        ],
                    },
                    {
                      value:
                        item["slag_removal_details"]["holding_details"][
                          "hold_no"
                        ],
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
              {
                value:
                  item["slag_removal_details"]["holding_details"]["hold_no"],
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
        this.mwoinspectionBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOCompositionCheckReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOCompositionCheckReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOCompositionCheckReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
