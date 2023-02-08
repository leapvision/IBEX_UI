import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import {
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbTimepickerModule,
  NgbDropdownModule,
  NgbAccordionModule,
  NgbPaginationModule,
} from "@ng-bootstrap/ng-bootstrap";

import { PagetitleComponent } from "./pagetitle/pagetitle.component";
import { LoaderComponent } from "./loader/loader.component";
import { TableComponent } from "./table/table.component";
import { SpectroReportsComponent } from "./spectroreports/spectroreports.component";

@NgModule({
  declarations: [
    PagetitleComponent,
    LoaderComponent,
    TableComponent,
    SpectroReportsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
    NgbAccordionModule,
    NgbPaginationModule,
  ],
  exports: [
    PagetitleComponent,
    LoaderComponent,
    TableComponent,
    SpectroReportsComponent,
  ],
})
export class UIModule {}
