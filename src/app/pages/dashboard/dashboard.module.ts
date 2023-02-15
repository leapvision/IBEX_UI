import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DashboardsRoutingModule } from "./dashboard-routing.module";
import { UIModule } from "../../shared/ui/ui.module";
import { WidgetModule } from "../../shared/widget/widget.module";

import { NgApexchartsModule } from "ng-apexcharts";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbCarouselModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";

import { NgxEchartsModule } from "ngx-echarts";
import { AdminDashboardComponent } from "./admin/admin.component";
import { SupervisorDashboardComponent } from "./supervisor/supervisor.component";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AdminDashboardComponent, SupervisorDashboardComponent],
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
    SimplebarAngularModule,
    NgbDatepickerModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
  ],
})
export class DashboardsModule {}
