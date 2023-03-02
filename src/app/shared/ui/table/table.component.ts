import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges,
} from "@angular/core";
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
  @Input() PaginationData;

  @Output() pageSizeSelected = new EventEmitter<number>();
  @Output() pageNumber = new EventEmitter<number>();
  @Output() searchValue = new EventEmitter<string>();

  tableData: string[];

  totalRecords: number;
  page: number;
  pageSize: number;
  searchTerm: string;
  startIndex: number;
  endIndex: number;

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
    // this.totalRecords = this.tableData.length;
    // this.page = 1;
    console.log(this.PaginationData);
    this.pageSize = 10;
    this.searchTerm = "";
    this.page = 1;
    this.startIndex = (this.page - 1) * this.pageSize + 1;
    this.endIndex = (this.page - 1) * this.pageSize + this.pageSize;
    // this.tableData = this.BodyArray.slice(this.startIndex - 1, this.endIndex);

    this.totalRecords = this.PaginationData.total_records;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    for (const propName in changes) {
      if (propName === "BodyArray") {
        const changedProp = changes[propName];
        this.tableData = changedProp.currentValue;
        // this.totalRecords = this.tableData.length;
      }
      if (propName === "PaginationData") {
        const changedProp = changes[propName];
        this.totalRecords = changedProp.currentValue.total_records;
        if (this.searchTerm.length > 0) {
          this.totalRecords = changedProp.currentValue.filtered_records;
          if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
          }
        }
      }
      // console.log(changes[propName].currentValue);
      // this.tableData = changes[propName].currentValue;
    }
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

  openModal(body) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: false,
      size: "xl",
    });

    modalRef.componentInstance.message = "Detailed View";

    if (body.image) {
      modalRef.componentInstance.body = `<div class="text-center"><img
    alt="expanded"
    width="800"
    src=${body.src}
  /></div>`;
    } else if (body.detail) {
      modalRef.componentInstance.body = `
      <div class="text-center">This will be the body of the Modal</div>
    `;
    } else {
      modalRef.componentInstance.body = `
      <div>Nothing to display</div>
    `;
    }
  }
}
