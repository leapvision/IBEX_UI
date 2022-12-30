import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './mwo-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ArchwizardModule } from 'angular-archwizard';
// import { SharedModule } from './saas/shared/shared.module'
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCarouselModule, NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule, NgbPopoverModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../shared/shared.module';
import { TransferToMwoComponent } from './transfertomwo/transfertomwo.component';
import { SlagRemovalComponent } from './slagremoving/slagremoval.component';
import { MWOInspectionComponent } from './mwoinspection/mwoinspection.component';
import { IngotPouringComponent } from './ignotpouring/ingotpouring.component';
import { VisualInspectionComponent } from './visualinspection/visualinspection.component';



@NgModule({
  declarations: [TransferToMwoComponent,SlagRemovalComponent,MWOInspectionComponent,IngotPouringComponent,VisualInspectionComponent],
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
    NgbAccordionModule
  ]
})
export class MwoModule { }
