import { TableViewService } from "./tableview.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tableview",
  templateUrl: "./tableview.component.html",
  styleUrls: ["./tableview.component.scss"],
})
export class TableViewComponent implements OnInit {
  constructor(private tableviewService: TableViewService) {}

  ngOnInit(): void {}

  headingArray = this.tableviewService.getTableView().heading;
  bodyArray = this.tableviewService.getTableView().body;
  dayheadingArray = this.tableviewService.getTableViewForDay().heading;
  daybodyArray = this.tableviewService.getTableViewForDay().body;
}
