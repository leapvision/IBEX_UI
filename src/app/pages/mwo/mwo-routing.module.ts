import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";
import { BuffingAndPolishingComponent } from "./buffingandpolishing/buffingandpolishing.component";
import { FinalInspectionComponent } from "./finalinspection/finalinspection.component";
import { IngotPouringComponent } from "./ingotpouring/ingotpouring.component";
import { MWOInspectionComponent } from "./mwoinspection/mwoinspection.component";
import { PrintingComponent } from "./printing/printing.component";
import { SlagRemovalComponent } from "./slagremoving/slagremoval.component";
import { TransferToMwoComponent } from "./transfertomwo/transfertomwo.component";
import { VisualInspectionComponent } from "./visualinspection/visualinspection.component";

const routes: Routes = [
  {
    path: "transfertomwo",
    component: TransferToMwoComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "slagremoval",
    component: SlagRemovalComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "mwoinspection",
    component: MWOInspectionComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_quality"],
    },
  },
  {
    path: "ingotpouring",
    component: IngotPouringComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "visualinspection",
    component: VisualInspectionComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_quality"],
    },
  },
  {
    path: "buffingandpolishing",
    component: BuffingAndPolishingComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "printing",
    component: PrintingComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin", "ibex_supervisor"],
    },
  },
  {
    path: "finalinspection",
    component: FinalInspectionComponent,
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
