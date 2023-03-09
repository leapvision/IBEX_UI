import { WizardComponent } from "angular-archwizard";
import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MeltingService } from "./melting.service";
import { MaterialLoadingService } from "../loadingofrm/loadingofrm.service";
import { MTOMeltingService } from "src/app/core/services/mto/mtomelting.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WebcamImage } from "ngx-webcam";
import { dataURItoBlob, dataURLtoFile } from "src/app/core/helpers/functions";

@Component({
  selector: "app-melting",
  templateUrl: "./melting.component.html",
  styleUrls: ["./melting.component.scss"],
  providers: [DecimalPipe],
})
export class MeltingComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  webcamImage: WebcamImage | undefined;

  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;
  isMeltImageAvailable: boolean = false;
  imageFile: any;

  hideme: boolean[] = [];

  bodyArray = [];
  paginationDetails = {};

  meltNumbers = [];

  mtoMeltingForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private materialLoadingService: MaterialLoadingService,
    private mtoMeltingService: MTOMeltingService
  ) {}

  materialLoadingHeadingArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).heading;
  materialLoadingBodyArray =
    this.materialLoadingService.getMaterialLoadingReportForMeltNumber(
      "meltNumber"
    ).body;
  meltingHeadingArray = this.mtoMeltingService.headingArray;
  meltingBodyArray = [];
  paginationData = {};

  parentsReports = [];

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MTO" },
      { label: "Melting", active: true },
    ];

    this.formInit();

    this.fetchMeltNumbers();

    this.fetchMTOMeltingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mtoMeltingForm = this.fb.group({
      meltNumberGroup: this.fb.group({
        melt_no: [null, Validators.required],
      }),
      meltTemperatureGroup: this.fb.group({
        melt_image: [null],
        melt_temp: [null, Validators.required],
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
    this.mtoMeltingService.getAllReadyForMelting().subscribe((result) => {
      if (result != null) {
        response = result;
        console.log(response);
      }
      this.meltNumbers = response.Data;
    });
  }

  get form() {
    return this.mtoMeltingForm.controls;
  }

  onMtoMeltingFormSubmit() {
    let response;
    // console.log(this.mtoMeltingForm.value);
    // console.log(JSON.parse(localStorage.getItem("lineDetails")).id);
    const imageName = `${
      this.form.meltNumberGroup.value["melt_no"]
    }-${new Date().getTime()}.png`;
    const imageBlob = dataURItoBlob(this.webcamImage.imageAsBase64);
    this.imageFile = new File([imageBlob], imageName, { type: "image/png" });
    console.log(this.imageFile);

    const meltingFormData = new FormData();
    meltingFormData.append(
      "loading_id",
      this.meltNumbers.find(
        (item) => item.melt_no === this.form.meltNumberGroup.value["melt_no"]
      ).id
    );
    meltingFormData.append(
      "line_id",
      JSON.parse(localStorage.getItem("lineDetails")).id
    );
    meltingFormData.append(
      "melting_temp",
      this.form.meltTemperatureGroup.value["melt_temp"]
    );
    meltingFormData.append("image_path", this.imageFile);
    meltingFormData.append(
      "shift_id",
      JSON.parse(localStorage.getItem("shiftDetails")).id
    );
    meltingFormData.append("remarks", this.form.remarksGroup.value["remarks"]);

    // console.log(meltingData);
    this.mtoMeltingService.addMelting(meltingFormData).subscribe((result) => {
      if (result != null) {
        response = result;
      }
      console.log(response);
      if (response.Result === "Success") {
        this.mtoMeltingForm.reset();
        this.formInit();
        this.wizard.reset();
        this.fetchMeltNumbers();
        this.fetchMTOMeltingReport(
          this.pageSize,
          this.pageNumber,
          this.searchValue
        );
      } else {
        alert("Something went wrong!🥲");
      }
    });
  }

  fetchMTOMeltingReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mtoMeltingService
      .getAllMeltingReport(pageSize, pageNumber, searchValue)
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
              name: "Material Loading",
              heading: this.materialLoadingHeadingArray,
              body: [
                {
                  currentReport: [
                    {
                      value: new Date(
                        item["loading_details"]["created_on"]
                      ).toLocaleDateString("en-GB"),
                    },
                    {
                      value: item["loading_details"]["melt_no"],
                    },
                    {
                      value:
                        item["loading_details"]["sfg_prod_order_details"]["id"],
                    },
                    {
                      value:
                        item["loading_details"]["sfg_prod_order_details"][
                          "alloy_name"
                        ],
                    },
                    {
                      value:
                        item["loading_details"]["sfg_prod_order_details"][
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
              { value: item["shift_details"]["name"] },
              { value: item["loading_details"]["melt_no"] },
              { value: item["melting_temp"] },
              {
                img: `http://localhost:8000${item["image_path"]}`,
              },
            ],
            allPreviousReports: this.parentsReports,
          });
        });
        this.meltingBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMTOMeltingReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMTOMeltingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMTOMeltingReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
    console.log(webcamImage);

    // this.imageFile = new File([webcamImage.imageAsDataUrl], "Image.png");
    // console.log(this.imageFile);
    // this.imageFile = dataURLtoFile(webcamImage.imageAsDataUrl, "image.jpeg");
    // console.log(this.imageFile);
    this.isMeltImageAvailable = true;
  }
}
