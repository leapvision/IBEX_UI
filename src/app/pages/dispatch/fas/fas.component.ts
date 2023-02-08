import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent } from "src/app/shared/ui/modal/modal.component";
import { FASService } from "./fas.service";

@Component({
  selector: "app-fas",
  templateUrl: "./fas.component.html",
  styleUrls: ["./fas.component.scss"],
  providers: [DecimalPipe],
})
export class FASComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  invoiceNumbers = [];
  constructor(private modalService: NgbModal, private fasService: FASService) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dispatch" },
      { label: "FAS", active: true },
    ];
    this.invoiceNumbers = [
      "IEPL/0148/22-23",
      "IEPL/0150/22-23",
      "IEPL/0151/22-23",
      "IEPL/0152/22-23",
    ];
  }

  fasHeadingArray = this.fasService.getFASReport().heading;
  fasBodyArray = this.fasService.getFASReport().body;

  packinglistsummaryBodyArray = this.fasService.packinglistsummaryBodyArray;

  packinglistHeadingArray = this.fasService.packinglistHeadingArray;
  packinglistBodyArray = this.fasService.packinglistBodyArray;

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: false,
    });
    modalRef.componentInstance.message = "Remarks";
    modalRef.componentInstance.body = `
      <div>This will be the body of the Modal</div>
    `;
  }
}
