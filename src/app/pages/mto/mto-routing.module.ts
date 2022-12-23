import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadingOfRmComponent } from './loadingofrm/loadingofrm.component';

const routes: Routes = [
    {
        path: 'loadingofrm',
        component: LoadingOfRmComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
