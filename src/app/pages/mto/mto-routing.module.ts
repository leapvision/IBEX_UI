import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FluxMixingComponent } from './fluxmixing/fluxmixing.component';
import { LoadingOfRmComponent } from './loadingofrm/loadingofrm.component';
import { MeltingComponent } from './melting/melting.component';
import { SlagInspectionComponent } from './slaginspection/slaginspection.component';
import { SlagRemovingComponent } from './slagremoving/slagremoving.component';

const routes: Routes = [
    {
        path: 'loadingofrm',
        component: LoadingOfRmComponent
    },
    {
        path: 'melting',
        component: MeltingComponent
    },
    {
        path: 'fluxmixing',
        component: FluxMixingComponent
    },
    {
        path: 'slagremoving',
        component: SlagRemovingComponent
    },
    {
        path: 'slaginspection',
        component: SlagInspectionComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
