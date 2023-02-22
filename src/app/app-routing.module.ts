import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guards/auth/auth.guard";
import { RoleGuard } from "./core/guards/auth/role.guard";

import { LayoutComponent } from "./layouts/layout.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },

  {
    path: "pages",
    component: LayoutComponent,
    loadChildren: () =>
      import("./pages/pages.module").then((m) => m.PagesModule),
    canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
