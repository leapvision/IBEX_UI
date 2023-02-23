import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";
import { FluxMixingComponent } from "./fluxmixing/fluxmixing.component";
import { LoadingOfRmComponent } from "./loadingofrm/loadingofrm.component";
import { MeltingComponent } from "./melting/melting.component";
import { SlagInspectionComponent } from "./slaginspection/slaginspection.component";
import { SlagRemovingComponent } from "./slagremoving/slagremoving.component";

const routes: Routes = [
  {
    path: "loadingofrm",
    component: LoadingOfRmComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "melting",
    component: MeltingComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "fluxmixing",
    component: FluxMixingComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "slagremoving",
    component: SlagRemovingComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "slaginspection",
    component: SlagInspectionComponent,
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
