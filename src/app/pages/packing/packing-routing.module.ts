import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalInspectionComponent } from './finalinspection/finalinspection.component';
import { PackingIngotsComponent } from './packingingots/packingingots.component';


const routes: Routes = [
    {
        path: 'finalinspection',
        component: FinalInspectionComponent
    },
    {
        path: 'packingingots',
        component: PackingIngotsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackingRoutingModule {}
