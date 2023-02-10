import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile/profile.component";

import { ReportsComponent } from "./reports/reports.component";

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },

  { path: "reports", component: ReportsComponent },
  { path: "profile", component: ProfileComponent },
  {
    path: "dashboards",
    loadChildren: () =>
      import("./dashboards/dashboards.module").then((m) => m.DashboardsModule),
  },
  {
    path: "scrapmanagement",
    loadChildren: () =>
      import("./scrapmanagement/scrapmanagement.module").then(
        (m) => m.ScrapManagementModule
      ),
  },
  {
    path: "mto",
    loadChildren: () => import("./mto/mto.module").then((m) => m.MtoModule),
  },
  {
    path: "mwo",
    loadChildren: () => import("./mwo/mwo.module").then((m) => m.MwoModule),
  },
  {
    path: "packing",
    loadChildren: () =>
      import("./packing/packing.module").then((m) => m.PackingModule),
  },
  {
    path: "dispatch",
    loadChildren: () =>
      import("./dispatch/dispatch.module").then((m) => m.DispatchModule),
  },
  {
    path: "panel",
    loadChildren: () =>
      import("./panel/panel.module").then((m) => m.PanelModule),
  },
  {
    path: "usermanagement",
    loadChildren: () =>
      import("./usermanagement/usermanagement.module").then(
        (m) => m.UserManagementModule
      ),
  },
  {
    path: "settings",
    loadChildren: () =>
      import("./settings/settings.module").then((m) => m.SettingsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
