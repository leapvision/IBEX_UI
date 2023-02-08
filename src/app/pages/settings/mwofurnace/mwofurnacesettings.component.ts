import { Component, OnInit } from "@angular/core";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-mwofurnacesettings",
  templateUrl: "./mwofurnacesettings.component.html",
  styleUrls: ["./mwofurnacesettings.component.scss"],
  providers: [DecimalPipe],
})
export class MwoFurnaceSettingsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
