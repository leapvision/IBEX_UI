import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinalInspectionComponent } from './finalinspection/finalinspection.component';


const routes: Routes = [
    {
        path: 'finalinspection',
        component: FinalInspectionComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PackingRoutingModule {}
