import { WizardComponent } from "angular-archwizard";
import { Component, OnInit, ViewChild } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { MTOFurnaceSettingsService } from "src/app/core/services/settings/mtofurnace.service";

@Component({
  selector: "app-mtofurnacesettings",
  templateUrl: "./mtofurnacesettings.component.html",
  styleUrls: ["./mtofurnacesettings.component.scss"],
  providers: [DecimalPipe],
})
export class MtoFurnaceSettingsComponent implements OnInit {
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  submitted = false;
  breadCrumbItems: Array<{}>;
  addMTOFurnaceForm: FormGroup;
  responseData: any;

  constructor(
    public fb: FormBuilder,
    private mtofurnacesettingsService: MTOFurnaceSettingsService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Settings" },
      { label: "MTO Furnace", active: true },
    ];

    this.addMTOFurnaceForm = this.fb.group({
      machineDetailsGroup: this.fb.group({
        name: ["", Validators.required],
        code: ["", Validators.required],
      }),
    });
  }

  get form() {
    return this.addMTOFurnaceForm.controls;
  }

  onAddMTOFurnaceFormSubmit() {
    // console.log(this.addMTOFurnaceForm.value);
    const machineData = {
      name: this.form.machineDetailsGroup.value["name"],
      code: this.form.machineDetailsGroup.value["code"],
    };
    this.mtofurnacesettingsService
      .addMeltingFurnace(machineData)
      .subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          console.log(this.responseData);
          if (this.responseData.Result === "Success") {
            this.addMTOFurnaceForm.reset();
            this.wizard.reset();
          } else {
            alert("Something went wrong!🥲");
          }
        }
      });
  }
}
