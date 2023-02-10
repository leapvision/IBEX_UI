import { SupervisorDashboardComponent } from "./supervisor/supervisor.component";
import { AdminDashboardComponent } from "./admin/admin.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "admin",
    component: AdminDashboardComponent,
  },
  {
    path: "supervisor",
    component: SupervisorDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
