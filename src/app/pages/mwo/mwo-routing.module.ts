import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IngotPouringComponent } from './ignotpouring/ingotpouring.component';
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
    {
        path: 'ingotpouring',
        component: IngotPouringComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
