import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: "supervisor",
    loadChildren: () =>
      import("./supervisor/supervisor.module").then((m) => m.SupervisorModule),
    canActivate: [AuthGuard],
  },
  {
    path: "quality",
    loadChildren: () =>
      import("./quality/quality.module").then((m) => m.QualityModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
