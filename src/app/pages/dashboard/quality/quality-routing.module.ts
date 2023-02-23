import { TableViewComponent } from "./tableview/tableview.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GraphViewComponent } from "./graphview/graphview.component";
import { QualityDashboardComponent } from "./quality.component";

const routes: Routes = [
  {
    path: "",
    component: QualityDashboardComponent,
    children: [
      {
        path: "table",
        component: TableViewComponent,
      },
      {
        path: "graph",
        component: GraphViewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QualityRoutingModule {}
