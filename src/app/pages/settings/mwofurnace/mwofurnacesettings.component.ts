import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { WizardComponent } from "angular-archwizard";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MWOFurnaceSettingsService } from "src/app/core/services/settings/mwofurnace.service";

@Component({
  selector: "app-mwofurnacesettings",
  templateUrl: "./mwofurnacesettings.component.html",
  styleUrls: ["./mwofurnacesettings.component.scss"],
  providers: [DecimalPipe],
})
export class MwoFurnaceSettingsComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  submitted = false;
  breadCrumbItems: Array<{}>;
  addMWOFurnaceForm: FormGroup;
  responseData: any;

  constructor(
    public fb: FormBuilder,
    private mwofurnacesettingsService: MWOFurnaceSettingsService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Settings" },
      { label: "MWO Furnace", active: true },
    ];

    this.addMWOFurnaceForm = this.fb.group({
      machineDetailsGroup: this.fb.group({
        name: ["", Validators.required],
        code: ["", Validators.required],
      }),
    });
  }

  get form() {
    return this.addMWOFurnaceForm.controls;
  }

  onAddMWOFurnaceFormSubmit() {
    // console.log(this.addMTOFurnaceForm.value);
    const machineData = {
      name: this.form.machineDetailsGroup.value["name"],
      code: this.form.machineDetailsGroup.value["code"],
    };
    this.mwofurnacesettingsService
      .addHoldingFurnace(machineData)
      .subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          console.log(this.responseData);
          if (this.responseData.Result === "Success") {
            this.addMWOFurnaceForm.reset();
            this.wizard.reset();
          } else {
            alert("Something went wrong!🥲");
          }
        }
      });
  }
}
