import html2canvas from "html2canvas";
import autoTable from "jspdf-autotable";
import { jsPDF } from "jspdf";
import { TableViewService } from "./tableview.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-tableview",
  templateUrl: "./tableview.component.html",
  styleUrls: ["./tableview.component.scss"],
})
export class TableViewComponent implements OnInit {
  headArray: Array<any> = [];
  dataArray: Array<any> = [];
  dummyArray = [];

  constructor(private tableviewService: TableViewService) {}

  headingArray = this.tableviewService.getTableView().heading;
  bodyArray = this.tableviewService.getTableView().body;
  dayheadingArray = this.tableviewService.getTableViewForDay().heading;
  daybodyArray = this.tableviewService.getTableViewForDay().body;
  ngOnInit(): void {
    const dayTableArray = Object.keys(Object.values(this.dayheadingArray)).map(
      (index) => {
        let record = Object.values(this.dayheadingArray)[index];
        record.map((item) => {
          this.dummyArray.push({
            content: item.heading,
            colSpan: item.colspan,
            styles: { halign: "center", fontSize: 8, borderColor: [0, 0, 0] },
          });
        });
        this.headArray.push(this.dummyArray);
        this.dummyArray = [];
      }
    );
    // console.log(this.headArray);

    const resultbArray = Object.keys(Object.values(this.daybodyArray)).map(
      (index) => {
        let person = Object.values(this.daybodyArray)[index];

        person.map((index) => {
          this.dummyArray.push(index.innerText ? index.innerText : index.value);
        });
        this.dataArray.push(this.dummyArray);
        this.dummyArray = [];
      }
    );
    console.log(this.dataArray);
  }

  export() {
    // Col spans and row spans
    const doc = new jsPDF("l", "pt", "a3");
    // let body = this.bodyRows(this.daybodyArray.length);
    // for (var i = 0; i < body.length; i++) {
    //   var row = body[i];
    //   if (i % 5 === 0) {
    //     row["id"] = {
    //       rowSpan: 5,
    //       content: i / 5 + 1,
    //       styles: { valign: "middle", halign: "center" },
    //     };
    //   }
    // }
    (doc as any).autoTable({
      startY: 60,
      head: this.headArray,
      body: this.dataArray,
      theme: "grid",
      headerStyles: {
        lineWidth: 1,
        lineColor: [0, 0, 0],
      },
    });
    doc.save("TESTCOLSPAN.pdf");
  }

  bodyRows(rowCount) {
    rowCount = rowCount || 10;
    let body = [];
    for (var j = 1; j <= rowCount; j++) {
      body.push({
        id: j,
        name: "PARTH",
        email: "PARTH",
        city: "PARTH",
        expenses: "PARTH",
      });
    }
    return body;
  }

  exportAsPDF() {
    const pdf = new jsPDF();
    pdf.setFontSize(20);
    pdf.text("Daily Report", 11, 8);
    autoTable(pdf, {
      head: [this.headArray],
      body: [],
      theme: "plain",
      didDrawCell: (data: { column: { index: any } }) => {
        console.log(data.column.index);
      },
    });
    pdf.output("dataurlnewwindow");
    pdf.save("daypadf.pdf");
  }
}
