import { AuthGuard } from "./../core/guards/auth/auth.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

import { ReportsComponent } from "./reports/reports.component";
import { RoleGuard } from "../core/guards/auth/role.guard";

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },

  { path: "reports", component: ReportsComponent, canActivate: [AuthGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "scrapmanagement",
    loadChildren: () =>
      import("./scrapmanagement/scrapmanagement.module").then(
        (m) => m.ScrapManagementModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "mto",
    loadChildren: () => import("./mto/mto.module").then((m) => m.MtoModule),
    canActivate: [AuthGuard],
  },
  {
    path: "mwo",
    loadChildren: () => import("./mwo/mwo.module").then((m) => m.MwoModule),
    canActivate: [AuthGuard],
  },
  {
    path: "packing",
    loadChildren: () =>
      import("./packing/packing.module").then((m) => m.PackingModule),
    canActivate: [AuthGuard],
  },
  {
    path: "dispatch",
    loadChildren: () =>
      import("./dispatch/dispatch.module").then((m) => m.DispatchModule),
    canActivate: [AuthGuard],
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then((m) => m.DashboardsModule),
    canActivate: [AuthGuard],
  },
  {
    path: "usermanagement",
    loadChildren: () =>
      import("./usermanagement/usermanagement.module").then(
        (m) => m.UserManagementModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
