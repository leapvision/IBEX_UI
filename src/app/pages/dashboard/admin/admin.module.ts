import { TableViewComponent } from "./tableview/tableview.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from "./admin-routing.module";
import { UIModule } from "../../../shared/ui/ui.module";
import { WidgetModule } from "../../../shared/widget/widget.module";

import { NgApexchartsModule } from "ng-apexcharts";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbCarouselModule,
} from "@ng-bootstrap/ng-bootstrap";
import { SimplebarAngularModule } from "simplebar-angular";

import { NgxEchartsModule } from "ngx-echarts";
import { NgbDatepickerModule } from "@ng-bootstrap/ng-bootstrap";
import { GraphViewComponent } from "./graphview/graphview.component";

@NgModule({
  declarations: [TableViewComponent, GraphViewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule,
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
  exports: [TableViewComponent, GraphViewComponent],
})
export class AdminModule {}
