import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DispatchComponent } from './dispatch/dispatch.component';
import { FASComponent } from './fas/fas.component';
import { FinalInspectionComponent } from './finalinspection/finalinspection.component';
import { PackingIngotsComponent } from './packingingots/packingingots.component';
import { CertQualityComponent } from './quality/certquality.component';


const routes: Routes = [
    {
        path: 'finalinspection',
        component: FinalInspectionComponent
    },
    {
        path: 'packingingots',
        component: PackingIngotsComponent
    },
    {
        path: 'fas',
        component: FASComponent
    },
    {
        path: 'certquality',
        component: CertQualityComponent
    },
    {
        path: 'dispatch',
        component: DispatchComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackingRoutingModule {}
