import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  NgbNavModule,
  NgbDropdownModule,
  NgbModalModule,
  NgbTooltipModule,
  NgbCollapseModule,
  NgbDatepickerModule,
  NgbAccordionModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";
import { FullCalendarModule } from "@fullcalendar/angular";
import { SimplebarAngularModule } from "simplebar-angular";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin
import interactionPlugin from "@fullcalendar/interaction"; // a plugin
import { LightboxModule } from "ngx-lightbox";

import { WidgetModule } from "../shared/widget/widget.module";
import { UIModule } from "../shared/ui/ui.module";

// Emoji Picker
import { PickerModule } from "@ctrl/ngx-emoji-mart";

import { PagesRoutingModule } from "./pages-routing.module";

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReportsComponent } from "./reports/reports.component";
import { ProfileComponent } from "./profile/profile.component";

import { NgSelectModule } from "@ng-select/ng-select";
FullCalendarModule.registerPlugins([
  // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
]);

@NgModule({
  declarations: [ReportsComponent, ProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    PagesRoutingModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    UIModule,
    WidgetModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SimplebarAngularModule,
    LightboxModule,
    PickerModule,
    NgbDatepickerModule,
    NgbAccordionModule,
    NgSelectModule,
  ],
})
export class PagesModule {}
