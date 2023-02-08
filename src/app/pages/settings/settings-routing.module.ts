import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SettingsComponent } from "./ibexsettings/ibexsettings.component";
import { LineSettingsComponent } from "./line/linesettings.component";
import { MtoFurnaceSettingsComponent } from "./mtofurnace/mtofurnacesettings.component";
import { MwoFurnaceSettingsComponent } from "./mwofurnace/mwofurnacesettings.component";
import { ShiftSettingsComponent } from "./shift/shiftsettings.component";

const routes: Routes = [
  {
    path: "general",
    component: SettingsComponent,
  },
  {
    path: "mtofurnace",
    component: MtoFurnaceSettingsComponent,
  },
  {
    path: "mwofurnace",
    component: MwoFurnaceSettingsComponent,
  },
  {
    path: "line",
    component: LineSettingsComponent,
  },
  {
    path: "shift",
    component: ShiftSettingsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
