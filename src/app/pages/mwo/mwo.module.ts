import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DashboardsRoutingModule } from "./mwo-routing.module";
import { UIModule } from "../../shared/ui/ui.module";
import { WidgetModule } from "../../shared/widget/widget.module";
import { DropzoneModule } from "ngx-dropzone-wrapper";

import { NgApexchartsModule } from "ng-apexcharts";
import { ArchwizardModule } from "angular-archwizard";
// import { SharedModule } from './saas/shared/shared.module'
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbCarouselModule,
  NgbDatepickerModule,
  NgbTypeaheadModule,
  NgbPaginationModule,
  NgbPopoverModule,
  NgbAccordionModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";
import { SharedModule } from "../../shared/shared.module";
import { TransferToMwoComponent } from "./transfertomwo/transfertomwo.component";
import { SlagRemovalComponent } from "./slagremoving/slagremoval.component";
import { MWOInspectionComponent } from "./mwoinspection/mwoinspection.component";
import { IngotPouringComponent } from "./ingotpouring/ingotpouring.component";
import { VisualInspectionComponent } from "./visualinspection/visualinspection.component";
import { BuffingAndPolishingComponent } from "./buffingandpolishing/buffingandpolishing.component";
import { PrintingComponent } from "./printing/printing.component";
import { FinalInspectionComponent } from "./finalinspection/finalinspection.component";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [
    TransferToMwoComponent,
    SlagRemovalComponent,
    MWOInspectionComponent,
    IngotPouringComponent,
    VisualInspectionComponent,
    BuffingAndPolishingComponent,
    PrintingComponent,
    FinalInspectionComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardsRoutingModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCarouselModule,
    WidgetModule,
    NgApexchartsModule,
    SharedModule,
    SimplebarAngularModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    ArchwizardModule,
    NgbPopoverModule,
    NgbAccordionModule,
    DropzoneModule,
    NgSelectModule,
  ],
})
export class MwoModule {}
