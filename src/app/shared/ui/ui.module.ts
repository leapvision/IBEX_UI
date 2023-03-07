import { WebcamComponent } from "./webcam/webcam.component";
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
import { WebcamModule } from "ngx-webcam";

@NgModule({
  declarations: [
    PagetitleComponent,
    LoaderComponent,
    TableComponent,
    SpectroReportsComponent,
    WebcamComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    WebcamModule,
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
    WebcamComponent,
  ],
})
export class UIModule {}
