import { FluxMixingTableComponent } from "./table/mto/fluxmixing/fluxmixing-table.component";
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
import { FinalInspectionTableComponent } from "./table/packing/finalinspection/finalinspection-table.component";

@NgModule({
  declarations: [
    PagetitleComponent,
    LoaderComponent,
    TableComponent,
    FluxMixingTableComponent,
    FinalInspectionTableComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
  ],
  exports: [
    PagetitleComponent,
    LoaderComponent,
    TableComponent,
    FluxMixingTableComponent,
    FinalInspectionTableComponent,
  ],
})
export class UIModule {}
