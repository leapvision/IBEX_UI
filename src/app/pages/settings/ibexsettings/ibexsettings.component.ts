import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-settings",
  templateUrl: "./ibexsettings.component.html",
  styleUrls: ["./ibexsettings.component.scss"],
  providers: [DecimalPipe],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
