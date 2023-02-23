import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FinalDispatchComponent } from "./finaldispatch/finaldispatch.component";
import { FASComponent } from "./fas/fas.component";
import { CertQualityComponent } from "./quality/certquality.component";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";

const routes: Routes = [
  {
    path: "fas",
    component: FASComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_quality"],
    },
  },
  {
    path: "certquality",
    component: CertQualityComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_quality"],
    },
  },
  {
    path: "finaldispatch",
    component: FinalDispatchComponent,
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
export class DispatchRoutingModule {}
