import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-mtofurnacesettings",
  templateUrl: "./mtofurnacesettings.component.html",
  styleUrls: ["./mtofurnacesettings.component.scss"],
  providers: [DecimalPipe],
})
export class MtoFurnaceSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
