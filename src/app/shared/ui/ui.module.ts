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
import { MtoMeltingTableComponent } from "./table/mto-melting-table/mto-melting-table.component";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  declarations: [PagetitleComponent, LoaderComponent, MtoMeltingTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbDropdownModule,
  ],
  exports: [PagetitleComponent, LoaderComponent, MtoMeltingTableComponent],
})
export class UIModule {}
