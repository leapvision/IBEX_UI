import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin/admin.component';
import { SupervisorPanelComponent } from './supervisor/supervisor.component';


const routes: Routes = [
    {
        path: 'admin',
        component: AdminPanelComponent
    },
    {
        path: 'supervisor',
        component: SupervisorPanelComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
