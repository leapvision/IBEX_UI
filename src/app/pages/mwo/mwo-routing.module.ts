import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
