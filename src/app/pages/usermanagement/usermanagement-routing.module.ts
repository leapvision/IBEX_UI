import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorManagementComponent } from './operator/operator.component';
import { QualityManagementComponent } from './quality/quality.component';
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
    {
        path: 'quality',
        component: QualityManagementComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserManagementRoutingModule {}
