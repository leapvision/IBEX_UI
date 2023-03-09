import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ViewChild,
} from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { TransferToMwoService } from "./transfertomwo.service";
import { WizardComponent } from "angular-archwizard";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MWOTransferToMWOService } from "src/app/core/services/mwo/mwotransfertomwo.service";

@Component({
  selector: "app-transfertomwo",
  templateUrl: "./transfertomwo.component.html",
  styleUrls: ["./transfertomwo.component.scss"],
  providers: [DecimalPipe],
})
export class TransferToMwoComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  breadCrumbItems: Array<{}>;

  pageSize: number = 10;
  pageNumber: number = 1;
  searchValue: string = "";
  isRemarksAvailable: boolean = false;

  meltNumbers = [];

  mwoTransferToMWOForm: FormGroup;

  bodyArray = [];
  paginationDetails = {};

  constructor(
    public fb: FormBuilder,
    private mwoTransferToMWOService: MWOTransferToMWOService
  ) {}

  transfertomwoHeadingArray = this.mwoTransferToMWOService.headingArray;
  transfertomwoBodyArray = [];
  paginationData = {};

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "MWO" },
      { label: "Transfer to MWO", active: true },
    ];

    this.formInit();

    this.fetchMeltNumbers();

    this.fetchMWOTransferToMWOReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  formInit() {
    this.mwoTransferToMWOForm = this.fb.group({
      transferToMWOMeltNumberGroup: this.fb.group({
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
    this.mwoTransferToMWOService
      .getAllReadyForTransferToMWO()
      .subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        this.meltNumbers = response.Data;
      });
  }

  get form() {
    return this.mwoTransferToMWOForm.controls;
  }

  onMwoTransferToMWOFormSubmit() {
    let response;

    let transferToMWOData = {
      mto_inspection_id: this.meltNumbers.find(
        (item) =>
          item.slag_removal_details.flux_details.melting_details.loading_details
            .melt_no === this.form.transferToMWOMeltNumberGroup.value["melt_no"]
      ).id,
      line_id: JSON.parse(localStorage.getItem("lineDetails")).id,
      shift_id: JSON.parse(localStorage.getItem("shiftDetails")).id,
      remarks: this.form.remarksGroup.value["remarks"],
    };

    this.mwoTransferToMWOService
      .addTransferToMWO(transferToMWOData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        console.log(response);
        if (response.Result === "Success") {
          this.mwoTransferToMWOForm.reset();
          this.formInit();
          this.wizard.reset();
          this.fetchMeltNumbers();
          this.fetchMWOTransferToMWOReport(
            this.pageSize,
            this.pageNumber,
            this.searchValue
          );
        } else {
          alert("Something went wrong!🥲");
        }
      });
  }

  fetchMWOTransferToMWOReport(pageSize, pageNumber, searchValue) {
    let response;
    this.mwoTransferToMWOService
      .getAllTransferToMWOReport(pageSize, pageNumber, searchValue)
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
          this.bodyArray.push({
            currentReport: [
              {
                value: new Date(item["created_on"]).toLocaleDateString("en-GB"),
              },
              { value: item["shift_details"]["name"] },
              { value: item["melt_no"] },
              { value: item["hold_no"] },
            ],
          });
        });
        this.transfertomwoBodyArray = this.bodyArray;
      });
  }

  onChangePageSize(pageSizeSelected) {
    this.pageSize = pageSizeSelected;
    if (pageSizeSelected < this.bodyArray.length) {
      this.fetchMWOTransferToMWOReport(
        this.pageSize,
        this.pageNumber,
        this.searchValue
      );
    }
  }

  onChangePageNumber(page) {
    this.pageNumber = page;
    this.fetchMWOTransferToMWOReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }

  onChangeSearchValue(searchTerm) {
    this.searchValue = searchTerm;
    this.fetchMWOTransferToMWOReport(
      this.pageSize,
      this.pageNumber,
      this.searchValue
    );
  }
}
