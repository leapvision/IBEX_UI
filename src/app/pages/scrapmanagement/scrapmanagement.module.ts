import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './scrapmanagement-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ArchwizardModule } from 'angular-archwizard';
// import { SharedModule } from './saas/shared/shared.module'
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCarouselModule, NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { ScrapPurchaseComponent } from './scrappurchase/scrappurchase.component';
import { SharedModule } from '../../shared/shared.module';
import { ScrapInspectionComponent } from './scrapinspection/scrapinspection.component';


@NgModule({
  declarations: [ScrapPurchaseComponent,ScrapInspectionComponent],
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
    NgbPopoverModule
  ]
})
export class ScrapManagementModule { }
