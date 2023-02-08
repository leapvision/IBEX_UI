import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { FinalDispatchService } from "./finaldispatch.service";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { ModalComponent } from "src/app/shared/ui/modal/modal.component";

@Component({
  selector: "app-finaldispatch",
  templateUrl: "./finaldispatch.component.html",
  styleUrls: ["./finaldispatch.component.scss"],
  providers: [DecimalPipe],
})
export class FinalDispatchComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  containerNumbers = [];
  invoiceNumbers = [];

  constructor(
    private modalService: NgbModal,
    private finaldispatchService: FinalDispatchService
  ) {}

  finalDispatchHeadingArray =
    this.finaldispatchService.getFinalDispatchReport().heading;
  finalDispatchBodyArray =
    this.finaldispatchService.getFinalDispatchReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dispatch" },
      { label: "Final Dispatch", active: true },
    ];
    this.containerNumbers = ["MRKU09876SH", "MRKU098456SH"];
    this.invoiceNumbers = [
      "IEPL/0148/22-23",
      "IEPL/0150/22-23",
      "IEPL/0151/22-23",
      "IEPL/0152/22-23",
    ];
  }

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: false,
      size: "lg",
    });
    modalRef.componentInstance.message = "Remarks";
    modalRef.componentInstance.body = `
      <div>This will be the body of the Modal</div>
    `;
  }
}
