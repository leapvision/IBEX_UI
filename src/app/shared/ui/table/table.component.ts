import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Component, OnInit, Input } from "@angular/core";
import { ModalComponent } from "src/app/shared/ui/modal/modal.component";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() HeadingArray: string[] = [];
  @Input() BodyArray: string[] = [];
  @Input() ParentReports: string[] = [];
  @Input() source: boolean;
  @Input() children: boolean;
  @Input() slno: boolean;
  @Input() centered: boolean;

  tableData: string[];

  totalRecords: number;
  page: number;
  pageSize: number;
  searchTerm: string;
  startIndex: number;
  endIndex: number;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    this.totalRecords = this.BodyArray.length;
    this.page = 1;
    this.pageSize = 10;
    this.startIndex = (this.page - 1) * this.pageSize + 1;
    this.endIndex = (this.page - 1) * this.pageSize + this.pageSize;
    this.tableData = this.BodyArray.slice(this.startIndex - 1, this.endIndex);
  }

  fetchRecords(pageSize) {
    this.startIndex = (this.page - 1) * pageSize + 1;
    this.endIndex = (this.page - 1) * pageSize + pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.tableData = this.BodyArray.slice(this.startIndex - 1, this.endIndex);
  }

  paginate(page) {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }

    this.tableData = this.BodyArray.slice(this.startIndex - 1, this.endIndex);
  }

  openModal(imgSrc?: string) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: false,
      size: "xl",
    });
    modalRef.componentInstance.message = "Detailed View";
    // modalRef.componentInstance.body = `
    //   <div>This will be the body of the Modal</div>
    // `;
    modalRef.componentInstance.body = `<div class="text-center"><img
    alt="expanded"
    width="800"
    src=${imgSrc}
  /></div>`;
  }
}
