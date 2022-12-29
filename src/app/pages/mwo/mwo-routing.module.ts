import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransferToMwoComponent } from './transfertomwo/transfertomwo.component';


const routes: Routes = [
    {
        path: 'transfertomwo',
        component: TransferToMwoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
