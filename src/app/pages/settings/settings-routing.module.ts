import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth/auth.guard";
import { RoleGuard } from "src/app/core/guards/auth/role.guard";
import { SettingsComponent } from "./ibexsettings/ibexsettings.component";
import { LineSettingsComponent } from "./line/linesettings.component";
import { MtoFurnaceSettingsComponent } from "./mtofurnace/mtofurnacesettings.component";
import { MwoFurnaceSettingsComponent } from "./mwofurnace/mwofurnacesettings.component";
import { ShiftSettingsComponent } from "./shift/shiftsettings.component";

const routes: Routes = [
  {
    path: "general",
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "mtofurnace",
    component: MtoFurnaceSettingsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin"],
    },
  },
  {
    path: "mwofurnace",
    component: MwoFurnaceSettingsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin"],
    },
  },
  {
    path: "line",
    component: LineSettingsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: {
      role: ["ibex_admin"],
    },
  },
  {
    path: "shift",
    component: ShiftSettingsComponent,
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
export class SettingsRoutingModule {}
