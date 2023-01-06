import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIModule } from '../../shared/ui/ui.module';
import { WidgetModule } from '../../shared/widget/widget.module';

import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDropdownModule, NgbTooltipModule, NgbNavModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'
import { SimplebarAngularModule } from 'simplebar-angular';
import { SupervisorManagementComponent } from './supervisor/supervisor.component';
import { UserManagementRoutingModule } from './usermanagement-routing.module';
import { OperatorManagementComponent } from './operator/operator.component';
import { ArchwizardModule } from 'angular-archwizard';



@NgModule({
  declarations: [SupervisorManagementComponent,OperatorManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UIModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCarouselModule,
    WidgetModule,
    NgApexchartsModule,
    SimplebarAngularModule,
    UserManagementRoutingModule,
    ArchwizardModule
  ]
})
export class UserManagementModule { }
