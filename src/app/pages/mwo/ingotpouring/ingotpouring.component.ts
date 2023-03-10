import { Component, OnInit, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { WizardComponent } from "angular-archwizard";
import { WebcamImage } from "ngx-webcam";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MWOIngotPouringService } from "src/app/core/services/mwo/mwoingotpouring.service";
import { dataURItoBlob } from "src/app/core/helpers/functions";
import { MWOTransferToMWOService } from "src/app/core/services/mwo/mwotransfertomwo.service";
import { MWOSlagRemovalService } from "src/app/core/services/mwo/mwoslagremoval.service";
import { MWOCompositionCheckService } from "src/app/core/services/mwo/mwocomposition.service";

@Component({
  selector: "app-ingotpouring",
  templateUrl: "./ingotpouring.component.html",
  styleUrls: ["./ingotpouring.component.scss"],
  providers: [DecimalPipe],
})
export class IngotPouringComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  webcamImage: WebcamImage | undefined;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;
  isPouringTempImageAvailable: boolean = false;
  imageFile: any;

  holdNumbers = [];

  mwoIngotPouringForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  constructor(
    public fb: FormBuilder,
    private mwoTransferToMWOService: MWOTransferToMWOService,
    private mwoSlagRemovalService: MWOSlagRemovalService,
    private mwoCompositionCheckService: MWOCompositionCheckService,
    private mwoIngotPouringService: MWOIngotPouringService
  ) {}

  ingotpouringHeadingArray = this.mwoIngotPouringService.headingArray;
  ingotpouringBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Ignot Pouring", active: true },
    ];
    this.formInit();

    this.fetchHoldNumbers();

    this.fetchMWOIngotPouringReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mwoIngotPouringForm = this.fb.group({
      ingotPouringHoldNumberGroup: this.fb.group({
        hold_no: [null, Validators.required],
      }),
      ingotPouringDetailsGroup: this.fb.group({
        pouring_temp: [null, Validators.required],
        time: [null, Validators.required],
        quantity: [null, Validators.required],
      }),
      ingotDetailsGroup: this.fb.group({
        no_of_ingots_poured: [null, Validators.required],
        weight: [null, Validators.required],
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
    this.mwoIngotPouringService
      .getAllReadyForIngotPouring()
      .subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        this.holdNumbers = response.Data;
      });
  }

  get form() {
    return this.mwoIngotPouringForm.controls;
  }

  onMwoIngotPouringFormSubmit() {
    let response;

    const imageName = `${
      this.form.ingotPouringHoldNumberGroup.value["hold_no"]
    }-${new Date().getTime()}.png`;
    const imageBlob = dataURItoBlob(this.webcamImage.imageAsBase64);
    this.imageFile = new File([imageBlob], imageName, { type: "image/png" });
    console.log(this.imageFile);

    const ingotPouringFormData = new FormData();
    ingotPouringFormData.append(
      "mwo_ins_id",
      this.holdNumbers.find(
        (item) =>
          item.slag_removal_details.holding_details.hold_no ===
          this.form.ingotPouringHoldNumberGroup.value["hold_no"]
      ).id
    );
    ingotPouringFormData.append(
      "pouring_quantity",
      this.form.ingotPouringDetailsGroup.value["quantity"]
    );
    ingotPouringFormData.append(
      "pouring_temp",
      this.form.ingotPouringDetailsGroup.value["pouring_temp"]
    );
    ingotPouringFormData.append(
      "no_of_ingots",
      this.form.ingotDetailsGroup.value["no_of_ingots_poured"]
    );
    ingotPouringFormData.append(
      "ingots_weight",
      this.form.ingotDetailsGroup.value["weight"]
    );
    ingotPouringFormData.append("image_path", this.imageFile);
    ingotPouringFormData.append(
      "line_id",
      JSON.parse(localStorage.getItem("lineDetails")).id
    );
    ingotPouringFormData.append(
      "shift_id",
      JSON.parse(localStorage.getItem("shiftDetails")).id
    );
    ingotPouringFormData.append(
      "remarks",
      this.form.remarksGroup.value["remarks"]
    );
    console.log(ingotPouringFormData);

    this.mwoIngotPouringService
      .addIngotPouring(ingotPouringFormData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mwoCompositionCheckService
            .updateReadyForIngotPouring({
              id: ingotPouringFormData.get("mwo_ins_id"),
              move_to_ingots_pouring: true,
            })
            .subscribe((result) => {
              if (result != null) {
                response = result;
              }
              if (response.Result === "Success") {
                this.mwoIngotPouringForm.reset();
                this.formInit();
                this.wizard.reset();
                this.fetchHoldNumbers();
                this.fetchMWOIngotPouringReport(
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

  fetchMWOIngotPouringReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoIngotPouringService
      .getAllIngotPouringReport(pageSize, pageNumber, searchValue)
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
              name: "Composition Check",
              heading: this.mwoCompositionCheckService.headingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["mwo_ins_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["hold_no"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["spectro_sample_1"]["sample"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["spectro_sample_2"]["sample"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["spectro_sample_3"]["sample"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["spectro_sample_4"]["sample"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["spectro_sample_5"]["sample"],
                    },
                    {
                      isButton: true,
                      innerText: "Moved to MWO",
                      success: true,
                    },
                    { value: item["mwo_ins_details"]["remarks"] },
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
                        item["mwo_ins_details"]["slag_removal_details"][
                          "created_on"
                        ]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
                          "shift_details"
                        ]["name"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
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
                        item["mwo_ins_details"]["slag_removal_details"][
                          "tapping_temp"
                        ],
                    },
                    {
                      img: `http://localhost:8000${item["mwo_ins_details"]["slag_removal_details"]["image_path"]}`,
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
                          "slag_removal_time"
                        ],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
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
                        item["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["shift_details"]["name"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
                          "holding_details"
                        ]["melt_no"],
                    },
                    {
                      value:
                        item["mwo_ins_details"]["slag_removal_details"][
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
              { value: item["shift_details"]["name"] },
              {
                value:
                  item["mwo_ins_details"]["slag_removal_details"][
                    "holding_details"
                  ]["hold_no"],
              },
              {
                value: item["pouring_temp"],
              },
              {
                img: `http://localhost:8000${item["image_path"]}`,
              },
              {
                value: item["pouring_time"],
              },
              {
                value: item["pouring_quantity"],
              },

              { value: item["no_of_ingots"] },

              { value: item["ingots_weight"] },
              { value: item["final_heat_no"] },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.ingotpouringBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOIngotPouringReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOIngotPouringReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOIngotPouringReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    console.log(webcamImage);
    this.isPouringTempImageAvailable = true;
  }
}
