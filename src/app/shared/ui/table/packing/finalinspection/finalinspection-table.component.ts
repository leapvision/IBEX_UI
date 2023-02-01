import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-finalinspection-table",
  templateUrl: "./finalinspection-table.component.html",
  styleUrls: ["./finalinspection-table.component.scss"],
})
export class FinalInspectionTableComponent implements OnInit {
  @Input() HeadingArray: string[] = [];
  @Input() BodyArray: string[] = [];

  constructor() {}

  ngOnInit() {}
}
