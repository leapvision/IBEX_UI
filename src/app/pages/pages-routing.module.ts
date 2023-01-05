import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard' },

  { path: 'reports', component: ReportsComponent },
  { path: 'dashboards', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule) },
  { path: 'scrapmanagement', loadChildren: () => import('./scrapmanagement/scrapmanagement.module').then(m => m.ScrapManagementModule) },
  { path: 'mto', loadChildren: () => import('./mto/mto.module').then(m => m.MtoModule) },
  { path: 'mwo', loadChildren: () => import('./mwo/mwo.module').then(m => m.MwoModule) },
  { path: 'packing', loadChildren: () => import('./packing/packing.module').then(m => m.PackingModule) },
  { path: 'panel', loadChildren: () => import('./panel/panel.module').then(m => m.PanelModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
