import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorManagementComponent } from './operator/operator.component';
import { SupervisorManagementComponent } from './supervisor/supervisor.component';


const routes: Routes = [
    {
        path: 'supervisor',
        component: SupervisorManagementComponent
    },
    {
        path: 'operator',
        component: OperatorManagementComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserManagementRoutingModule {}
