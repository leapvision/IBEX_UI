import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardsRoutingModule } from './mto-routing.module';
import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { ArchwizardModule } from 'angular-archwizard';
// import { SharedModule } from './saas/shared/shared.module'
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCarouselModule, NgbDatepickerModule, NgbTypeaheadModule, NgbPaginationModule, NgbPopoverModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { SharedModule } from '../../shared/shared.module';
import { LoadingOfRmComponent } from './loadingofrm/loadingofrm.component';
import { MeltingComponent } from './melting/melting.component';
import { FluxMixingComponent } from './fluxmixing/fluxmixing.component';
import { SlagRemovingComponent } from './slagremoving/slagremoving.component';
import { SlagInspectionComponent } from './slaginspection/slaginspection.component';


@NgModule({
  declarations: [LoadingOfRmComponent,MeltingComponent,FluxMixingComponent,SlagRemovingComponent,SlagInspectionComponent],
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
export class MtoModule { }
