import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { TransferToMwoService } from "../transfertomwo/transfertomwo.service";
import { SlagRemovingService } from "./slagremoving.service";
import { WizardComponent } from "angular-archwizard";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MWOSlagRemovalService } from "src/app/core/services/mwo/mwoslagremoval.service";
import { WebcamImage } from "ngx-webcam";
import { dataURItoBlob } from "src/app/core/helpers/functions";

@Component({
  selector: "app-slagremoval",
  templateUrl: "./slagremoval.component.html",
  styleUrls: ["./slagremoval.component.scss"],
  providers: [DecimalPipe],
})
export class SlagRemovalComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  webcamImage: WebcamImage | undefined;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;
  isTappingTempImageAvailable: boolean = false;
  imageFile: any;

  holdNumbers = [];

  mwoSlagRemovalForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  constructor(
    public fb: FormBuilder,
    private transfertomwoService: TransferToMwoService,
    private slagremovingService: SlagRemovingService,
    private mwoSlagRemovalService: MWOSlagRemovalService
  ) {}

  transfertomwoHeadingArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .heading;
  transfertomwoBodyArray =
    this.transfertomwoService.getTransferToMwoReportForMeltNumber("meltNumber")
      .body;
  slagremovingHeadingArray = this.mwoSlagRemovalService.headingArray;
  slagremovingBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Slag Removing", active: true },
    ];

    this.formInit();

    this.fetchHoldNumbers();

    this.fetchMWOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mwoSlagRemovalForm = this.fb.group({
      slagRemovalHoldNumberGroup: this.fb.group({
        hold_no: [null, Validators.required],
      }),
      metalTappingToMWOGroup: this.fb.group({
        tapping_temp: [null, Validators.required],
        time: [null, Validators.required],
        slag_quantity: [null, Validators.required],
        slag_removal_quantity: [null, Validators.required],
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
    this.mwoSlagRemovalService
      .getAllReadyForSlagRemoval()
      .subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        this.holdNumbers = response.Data;
      });
  }

  get form() {
    return this.mwoSlagRemovalForm.controls;
  }

  onMwoSlagRemovalFormSubmit() {
    let response;

    const imageName = `${
      this.form.slagRemovalHoldNumberGroup.value["hold_no"]
    }-${new Date().getTime()}.png`;
    const imageBlob = dataURItoBlob(this.webcamImage.imageAsBase64);
    this.imageFile = new File([imageBlob], imageName, { type: "image/png" });
    console.log(this.imageFile);

    const slagRemovalFormData = new FormData();
    slagRemovalFormData.append(
      "holding_id",
      this.holdNumbers.find(
        (item) =>
          item.hold_no === this.form.slagRemovalHoldNumberGroup.value["hold_no"]
      ).id
    );
    slagRemovalFormData.append(
      "line_id",
      JSON.parse(localStorage.getItem("lineDetails")).id
    );
    slagRemovalFormData.append("addition_id", "1");
    slagRemovalFormData.append(
      "slag_quantity",
      this.form.metalTappingToMWOGroup.value["slag_quantity"]
    );
    slagRemovalFormData.append(
      "slag_removal",
      this.form.metalTappingToMWOGroup.value["slag_removal_quantity"]
    );
    slagRemovalFormData.append(
      "tapping_temp",
      this.form.metalTappingToMWOGroup.value["tapping_temp"]
    );
    slagRemovalFormData.append("image_path", this.imageFile);
    slagRemovalFormData.append(
      "shift_id",
      JSON.parse(localStorage.getItem("shiftDetails")).id
    );

    this.mwoSlagRemovalService
      .addSlagRemoval(slagRemovalFormData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mwoSlagRemovalForm.reset();
          this.formInit();
          this.wizard.reset();
          this.fetchHoldNumbers();
          this.fetchMWOSlagRemovalReport(
            this.pageSize,
            this.pageNumber,
            this.searchValue
          );
        } else {
          alert("Something went wrong!🥲");
        }
      });
  }

  fetchMWOSlagRemovalReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoSlagRemovalService
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
              name: "Transfer To MWO",
              heading: this.transfertomwoHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["holding_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value: item["holding_details"]["shift_details"]["name"],
                    },
                    {
                      value: item["holding_details"]["melt_no"],
                    },
                    {
                      value: item["holding_details"]["hold_no"],
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
              { value: item["holding_details"]["hold_no"] },
              { value: 0 },
              { value: 0 },
              { value: 0 },
              { value: 0 },
              { value: 0 },
              { value: item["tapping_temp"] },
              {
                img: `http://localhost:8000${item["image_path"]}`,
              },
              { value: item["slag_removal_time"] },
              { value: item["slag_quantity"] },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.slagremovingBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOSlagRemovalReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOSlagRemovalReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    console.log(webcamImage);
    this.isTappingTempImageAvailable = true;
  }
}
