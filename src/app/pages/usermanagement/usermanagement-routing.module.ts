import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisorManagementComponent } from './supervisor/supervisor.component';


const routes: Routes = [
    {
        path: 'supervisor',
        component: SupervisorManagementComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserManagementRoutingModule {}
