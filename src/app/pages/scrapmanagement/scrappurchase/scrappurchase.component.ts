import { InwardScrapService } from "./../../../core/services/scrapmanagement/inwardscrap.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { ScrapPurchaseService } from "./scrappurchase.service";
import { SAPService } from "src/app/core/services/sap/sap.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WizardComponent } from "angular-archwizard";

@Component({
  selector: "app-scrappurchase",
  templateUrl: "./scrappurchase.component.html",
  styleUrls: ["./scrappurchase.component.scss"],
  providers: [DecimalPipe],
})
export class ScrapPurchaseComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  breadCrumbItems: Array<{}>;
  inwardScrapForm: FormGroup;
  responseData: any;
  scrapDetails: any;
  isRemarksAvailable: boolean = false;

  grnNumbers: Array<string>;

  selectValue: string[];

  constructor(
    public fb: FormBuilder,
    private scrappurchaseService: ScrapPurchaseService,
    private sapService: SAPService,
    private inwardscrapService: InwardScrapService
  ) {}

  scrappurchaseHeadingArray =
    this.scrappurchaseService.getScrapPurchaseReport().heading;
  scrappurchaseBodyArray =
    this.scrappurchaseService.getScrapPurchaseReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Scrap Management" },
      { label: "Inward Scrap", active: true },
    ];

    this.formInit();

    this.fetchAllGRNs();

    // this.grnNumbers = ["1", "2", "3", "4", "5"];

    this.selectValue = ["Reason 1", "Reason 2", "Reason 3"];
  }

  formInit() {
    this.inwardScrapForm = this.fb.group({
      scrapDetailsGroup: this.fb.group({
        grn_no: [null, Validators.required],
        alloy_name: [null, Validators.required],
        source: [null, Validators.required],
        weight: [null, Validators.required],
      }),
      remarksGroup: this.fb.group({
        remarks: [""],
      }),
    });
  }

  get form() {
    return this.inwardScrapForm.controls;
  }

  fetchAllGRNs() {
    this.grnNumbers = [];
    this.sapService.getAllGRNs().subscribe((result) => {
      if (result != null) {
        this.responseData = result;
      }
      for (let index = 0; index < this.responseData.Data.length; index++) {
        this.grnNumbers.push(this.responseData.Data[index].id);
      }
      console.log(this.grnNumbers);
    });
  }

  updateScrapDetails(id) {
    let response;
    console.log(id);
    if (id != null) {
      this.sapService.getGRNByID(id).subscribe((result) => {
        if (result != null) {
          response = result;
          console.log(response);
        }
        response.Data.forEach((item) => {
          this.scrapDetails = {
            alloyName: item.alloy_name,
            source: item.source,
            weight: item.weight,
          };
        });
        console.log(this.scrapDetails);
        this.form.scrapDetailsGroup.patchValue({
          alloy_name: this.scrapDetails["alloyName"],
          source: this.scrapDetails["source"],
          weight: this.scrapDetails["weight"],
        });
        this.form.scrapDetailsGroup.get("alloy_name").disable();
        this.form.scrapDetailsGroup.get("source").disable();
        this.form.scrapDetailsGroup.get("weight").disable();
      });
    }
  }

  remarks(value) {
    if (value && value.length > 0) {
      this.isRemarksAvailable = true;
    }
  }
  onInwardScrapFormSubmit() {
    let response;
    console.log(this.inwardScrapForm.value);
    const inwardScrapData = {
      sap_grn_id: this.form.scrapDetailsGroup.value["grn_no"],
      remarks: this.form.remarksGroup.value["remarks"],
    };
    this.inwardscrapService
      .addInwardScrap(inwardScrapData)
      .subscribe((result) => {
        if (result != null) {
          response = result;
        }
        if (response.Result === "Success") {
          this.sapService
            .updateGRN({
              id: inwardScrapData.sap_grn_id,
              inward_recorded: true,
            })
            .subscribe((result) => {
              if (result != null) {
                response = result;
              }
              if (response.Result === "Success") {
                this.inwardScrapForm.reset();
                this.formInit();
                this.wizard.reset();
                this.fetchAllGRNs();
              } else {
                alert("Something went wrong!🥲");
              }
            });
        } else {
          alert("Something went wrong!🥲");
        }
      });
  }
}
