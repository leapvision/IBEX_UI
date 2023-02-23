import { AdminDashboardComponent } from "./admin.component";
import { TableViewComponent } from "./tableview/tableview.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GraphViewComponent } from "./graphview/graphview.component";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";

const routes: Routes = [
  {
    path: "",
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin"],
    },
    children: [
      {
        path: "table",
        component: TableViewComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
          role: ["ibex_admin"],
        },
      },
      {
        path: "graph",
        component: GraphViewComponent,
        canActivate: [AuthGuard, RoleGuard],
        data: {
          role: ["ibex_admin"],
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
