import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-spectroreports",
  templateUrl: "./spectroreports.component.html",
  styleUrls: ["./spectroreports.component.scss"],
})
export class SpectroReportsComponent implements OnInit {
  @Input() SamplesArray: string[] = [];

  constructor() {}

  ngOnInit() {}
}
