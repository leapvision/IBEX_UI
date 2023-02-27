import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { ProfileService } from "src/app/core/services/profile/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  providers: [DecimalPipe],
})
export class ProfileComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  responseData: any;

  hideme: boolean[] = [false, false, true];

  constructor(private profileService: ProfileService) {
    let userID =
      JSON.parse(localStorage.getItem("ibexUserData"))?.user_id || "";
  }

  ngOnInit(): void {
    let userID =
      JSON.parse(localStorage.getItem("ibexUserData"))?.user_id || "";
    this.profileService.getProfile(userID).subscribe((result) => {
      if (result != null) {
        this.responseData = result;
        console.log(this.responseData);
      }
    });
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

  showInspectionReport() {}
}
