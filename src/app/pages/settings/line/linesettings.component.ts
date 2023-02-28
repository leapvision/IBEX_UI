import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfigureLineSettingsService } from "./../../../core/services/settings/line.service";
import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { MTOFurnaceSettingsService } from "src/app/core/services/settings/mtofurnace.service";
import { MWOFurnaceSettingsService } from "src/app/core/services/settings/mwofurnace.service";

@Component({
  selector: "app-linesettings",
  templateUrl: "./linesettings.component.html",
  styleUrls: ["./linesettings.component.scss"],
  providers: [DecimalPipe],
})
export class LineSettingsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  responseData: any;
  configureLineForm: FormGroup;

  lines = [];
  mtoFurnaces = [];
  mwoFurnaces = [];

  constructor(
    public fb: FormBuilder,
    private configurelinesettingsService: ConfigureLineSettingsService,
    private mtofurnacesettingsService: MTOFurnaceSettingsService,
    private mwofurnacesettingsService: MWOFurnaceSettingsService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Settings" },
      { label: "Line", active: true },
    ];

    this.configurelinesettingsService.getAllLines().subscribe((result) => {
      if (result != null) {
        this.responseData = result;
        // console.log(this.responseData);
        for (let index = 0; index < this.responseData.Data.length; index++) {
          this.lines.push({
            id: this.responseData.Data[index].id,
            name: this.responseData.Data[index].name,
            melting_furnace_code: this.responseData.Data[index].melting_furnace
              ? this.meltingFurnaceById(
                  this.responseData.Data[index].melting_furnace
                )
              : "",
            holding_furnace_code: this.responseData.Data[index].holding_furnace
              ? this.holdingFurnaceById(
                  this.responseData.Data[index].holding_furnace
                )
              : "",
          });
        }
      }
    });

    this.mtofurnacesettingsService
      .getAllMeltingFurnaces()
      .subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          // console.log(this.responseData);
          this.responseData.Data.forEach((item) => {
            this.mtoFurnaces.push({
              id: item.id,
              name: item.code,
            });
          });
        }
      });

    this.mwofurnacesettingsService
      .getAllHoldingFurnaces()
      .subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          // console.log(this.responseData);
          this.responseData.Data.forEach((item) => {
            this.mwoFurnaces.push({
              id: item.id,
              name: item.code,
            });
          });
        }
      });

    this.configureLineForm = this.fb.group({
      lineDetailsGroup: this.fb.group({
        line_id: [null, Validators.required],
        mtofurnace_id: [null, Validators.required],
        mwofurnace_id: [null, Validators.required],
      }),
    });
  }

  get form() {
    return this.configureLineForm.controls;
  }

  meltingFurnaceById(id) {
    this.mtofurnacesettingsService
      .getMeltingFurnaceByID(id)
      .subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          console.log(this.responseData.Data[0].code);
          return this.responseData.Data[0].code;
        }
      });
  }

  holdingFurnaceById(id) {
    this.mwofurnacesettingsService
      .getHoldingFurnaceByID(id)
      .subscribe((result) => {
        if (result != null) {
          this.responseData = result;
          return this.responseData.Data.code;
        }
      });
  }

  updateFurnaces(id) {
    // console.log(this.lines);
    let line = this.lines.find((line) => line.id === id);
    // console.log(line);
    // let mtofurnace_code = line.melting_furnace_code;
    // let mwofurnace_code = line.holding_furnace_code;
    this.configureLineForm.patchValue({
      mtofurnace_id: "klkzhbchbsdxbxv",
      mwofurnace_id: "nxbvjxjvcj",
    });
  }

  onConfigureLineFormSubmit() {
    console.log(this.configureLineForm.value);
  }
}
