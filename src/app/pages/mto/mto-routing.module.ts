import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingOfRmComponent } from './loadingofrm/loadingofrm.component';
import { MeltingComponent } from './melting/melting.component';

const routes: Routes = [
    {
        path: 'loadingofrm',
        component: LoadingOfRmComponent
    },
    {
        path: 'melting',
        component: MeltingComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
