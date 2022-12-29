import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MWOInspectionComponent } from './mwoinspection/mwoinspection.component';
import { SlagRemovalComponent } from './slagremoving/slagremoval.component';
import { TransferToMwoComponent } from './transfertomwo/transfertomwo.component';


const routes: Routes = [
    {
        path: 'transfertomwo',
        component: TransferToMwoComponent
    },
    {
        path: 'slagremoval',
        component: SlagRemovalComponent
    },
    {
        path: 'mwoinspection',
        component: MWOInspectionComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
