import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
  },
  {
    path: "supervisor",
    loadChildren: () =>
      import("./supervisor/supervisor.module").then((m) => m.SupervisorModule),
  },
  {
    path: "quality",
    loadChildren: () =>
      import("./quality/quality.module").then((m) => m.QualityModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
