import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";
import { OperatorManagementComponent } from "./operator/operator.component";
import { QualityManagementComponent } from "./quality/quality.component";
import { SupervisorManagementComponent } from "./supervisor/supervisor.component";

const routes: Routes = [
  {
    path: "supervisor",
    component: SupervisorManagementComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin"],
    },
  },
  {
    path: "operator",
    component: OperatorManagementComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "quality",
    component: QualityManagementComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin"],
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
