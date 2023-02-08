import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
  },
  {
    path: "slagremoval",
    component: SlagRemovalComponent,
  },
  {
    path: "mwoinspection",
    component: MWOInspectionComponent,
  },
  {
    path: "ingotpouring",
    component: IngotPouringComponent,
  },
  {
    path: "visualinspection",
    component: VisualInspectionComponent,
  },
  {
    path: "buffingandpolishing",
    component: BuffingAndPolishingComponent,
  },
  {
    path: "printing",
    component: PrintingComponent,
  },
  {
    path: "finalinspection",
    component: FinalInspectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
