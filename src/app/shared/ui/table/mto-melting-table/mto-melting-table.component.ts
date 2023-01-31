import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-mto-melting-table",
  templateUrl: "./mto-melting-table.component.html",
  styleUrls: ["./mto-melting-table.component.scss"],
})
export class MtoMeltingTableComponent implements OnInit {
  @Input() HeadingArray: string[] = [];
  @Input() BodyArray: string[] = [];

  constructor() {}

  ngOnInit() {}
}
