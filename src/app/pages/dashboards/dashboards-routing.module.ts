import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MtoDashboardComponent } from './mto/mtodashboard.component';

const routes: Routes = [
    {
        path: 'mto',
        component: MtoDashboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
