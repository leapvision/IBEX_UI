import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbDropdownModule,
} from "@ng-bootstrap/ng-bootstrap";

import { PagetitleComponent } from "./pagetitle/pagetitle.component";
import { LoaderComponent } from "./loader/loader.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  declarations: [PagetitleComponent, LoaderComponent, TableComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
  ],
  exports: [PagetitleComponent, LoaderComponent, TableComponent],
})
export class UIModule {}
