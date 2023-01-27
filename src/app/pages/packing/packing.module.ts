import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PackingRoutingModule } from './packing-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ArchwizardModule } from 'angular-archwizard';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
// import { SharedModule } from './saas/shared/shared.module'
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCarouselModule, NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule, NgbPopoverModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../shared/shared.module';
import { FinalInspectionComponent } from './finalinspection/finalinspection.component';
import { PackingIngotsComponent } from './packingingots/packingingots.component';
import { FASComponent } from './fas/fas.component';
import { CertQualityComponent } from './quality/certquality.component';
import { DispatchComponent } from './dispatch/dispatch.component';


@NgModule({
  declarations: [FinalInspectionComponent,PackingIngotsComponent,FASComponent, CertQualityComponent, DispatchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PackingRoutingModule,
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
    NgSelectModule,
    DropzoneModule
  ]
})
export class PackingModule { }
