import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { GeneralSettingsService } from "src/app/core/services/settings/general.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-settings",
  templateUrl: "./ibexsettings.component.html",
  styleUrls: ["./ibexsettings.component.scss"],
  providers: [DecimalPipe],
})
export class SettingsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  responseData: any;
  generalSettingsData: any = [];
  // metricsForm: FormGroup;

  metricsForm = new FormGroup({
    Temperature: new FormControl("°C"),
    Weight: new FormControl("KG"),
  });

  constructor(private generalsettingsService: GeneralSettingsService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Settings" },
      { label: "General", active: true },
    ];

    this.generalsettingsService.getGeneralSettings().subscribe((result) => {
      if (result != null) {
        this.responseData = result;
        console.log(this.responseData);
      }
    });
  }

  save() {
    console.log(this.metricsForm.value);
    let enabled_si_unit_of_temperature =
      this.metricsForm.value["Temperature"] === "°C" ? true : false;
    this.generalsettingsService
      .updateGeneralSettings({
        pk: 1,
        enabled_si_unit: enabled_si_unit_of_temperature,
      })
      .subscribe();
    let enabled_si_unit_of_weight =
      this.metricsForm.value["Weight"] === "KG" ? true : false;
    this.generalsettingsService
      .updateGeneralSettings({
        pk: 2,
        enabled_si_unit: enabled_si_unit_of_weight,
      })
      .subscribe();
  }
}
