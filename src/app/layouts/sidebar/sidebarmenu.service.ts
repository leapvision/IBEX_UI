import { Injectable } from "@angular/core";
import { AdminMenu, SupervisorMenu, QualityMenu } from "./menu";

@Injectable({
  providedIn: "root",
})
export class SideBarMenuService {
  adminSideBarMenu = AdminMenu;
  supervisorSideBarMenu = SupervisorMenu;
  qualitySideBarMenu = QualityMenu;

  getMenuByRole(role: string) {
    if (role === "ibex_admin") {
      return this.adminSideBarMenu;
    } else if (role === "ibex_supervisor") {
      return this.supervisorSideBarMenu;
    } else if (role === "ibex_quality") {
      return this.qualitySideBarMenu;
    } else {
      return [];
    }
  }
}
