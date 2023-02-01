import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() HeadingArray: string[] = [];
  @Input() BodyArray: string[] = [];
  @Input() source: boolean;

  constructor() {}

  ngOnInit() {}
}
