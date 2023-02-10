import { QualityService } from "./certquality.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { ModalComponent } from "src/app/shared/ui/modal/modal.component";

@Component({
  selector: "app-certquality",
  templateUrl: "./certquality.component.html",
  styleUrls: ["./certquality.component.scss"],
  providers: [DecimalPipe],
})
export class CertQualityComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  invoiceNumbers = [];
  packingListNumbers = [];
  constructor(
    private modalService: NgbModal,
    private qualityService: QualityService
  ) {}

  qualityHeadingArray = this.qualityService.getQualityReport().heading;
  qualityBodyArray = this.qualityService.getQualityReport().body;

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dispatch" },
      { label: "Certificate of Quality", active: true },
    ];
    this.invoiceNumbers = [
      "IEPL/0148/22-23",
      "IEPL/0150/22-23",
      "IEPL/0151/22-23",
      "IEPL/0152/22-23",
    ];
    this.packingListNumbers = ["1001(MRKU986754SH)", "1002(MRKU986754SH)"];
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
