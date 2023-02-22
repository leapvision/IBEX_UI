import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";
import { PackingIngotsComponent } from "./packingingots/packingingots.component";

const routes: Routes = [
  {
    path: "",
    component: PackingIngotsComponent,
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
export class PackingRoutingModule {}
