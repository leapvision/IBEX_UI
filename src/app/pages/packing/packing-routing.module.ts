import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PackingIngotsComponent } from "./packingingots/packingingots.component";

const routes: Routes = [
  {
    path: "",
    component: PackingIngotsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackingRoutingModule {}
