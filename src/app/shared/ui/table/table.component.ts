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
  total_records_int_the_db: number;
  page: number;
  pageSize: number;
  searchTerm: string;
  startIndex: number;
  endIndex: number;

  filtered: boolean = false;

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

    this.total_records_int_the_db = this.PaginationData.total_records;
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

        if (changedProp.currentValue.filtered_records === 0) {
          this.startIndex = 0;
          this.endIndex = 0;
        } else {
          this.startIndex = (this.page - 1) * this.pageSize + 1;
          this.endIndex = (this.page - 1) * this.pageSize + this.pageSize;
        }

        if (
          this.searchTerm.length > 0 &&
          changedProp.currentValue.filtered_records <
            changedProp.currentValue.total_records
        ) {
          this.totalRecords = changedProp.currentValue.filtered_records;
          this.total_records_int_the_db =
            changedProp.currentValue.total_records;
          if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
          }
          this.filtered = true;
        } else {
          this.totalRecords = changedProp.currentValue.total_records;
          this.startIndex = (this.page - 1) * this.pageSize + 1;
          this.endIndex = (this.page - 1) * this.pageSize + this.pageSize;
          if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
          }
          this.filtered = false;
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
