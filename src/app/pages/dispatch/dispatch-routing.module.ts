import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FinalDispatchComponent } from "./finaldispatch/finaldispatch.component";
import { FASComponent } from "./fas/fas.component";
import { CertQualityComponent } from "./quality/certquality.component";

const routes: Routes = [
  {
    path: "fas",
    component: FASComponent,
  },
  {
    path: "certquality",
    component: CertQualityComponent,
  },
  {
    path: "finaldispatch",
    component: FinalDispatchComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispatchRoutingModule {}
