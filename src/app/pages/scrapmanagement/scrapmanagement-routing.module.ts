import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScrapInspectionComponent } from './scrapinspection/scrapinspection.component';
import { ScrapPurchaseComponent } from './scrappurchase/scrappurchase.component';

const routes: Routes = [
    {
        path: 'scrappurchase',
        component: ScrapPurchaseComponent
    },
    {
        path: 'scrapinspection',
        component: ScrapInspectionComponent
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardsRoutingModule {}
