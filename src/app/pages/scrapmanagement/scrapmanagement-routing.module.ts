import { RoleGuard } from "./../../core/guards/auth/role.guard";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { ScrapInspectionComponent } from "./scrapinspection/scrapinspection.component";
import { ScrapPurchaseComponent } from "./scrappurchase/scrappurchase.component";

const routes: Routes = [
  {
    path: "scrappurchase",
    component: ScrapPurchaseComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor", "ibex_quality"],
    },
  },
  {
    path: "scrapinspection",
    component: ScrapInspectionComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_quality"],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
