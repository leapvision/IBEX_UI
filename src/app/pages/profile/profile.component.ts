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
  profileData: any = {};

  hideme: boolean[] = [false, false, true];
  userID = JSON.parse(localStorage.getItem("ibexUserData"))?.user_id || "";

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile(this.userID).subscribe((result) => {
      if (result != null) {
        this.responseData = result;
        console.log(this.responseData);
        this.profileData = {
          username: this.responseData?.Data?.username,
          role: this.responseData?.Data?.groups[0]?.name,
          line: 2,
          last_login: this.responseData?.Data?.last_login,
          fullname: `${this.responseData?.Data?.first_name} ${this.responseData?.Data?.last_name}`,
          email: this.responseData?.Data?.email,
          contact_number: `+91-${this.responseData?.Data?.contact_number}`,
        };
      }
    });
  }

  changeValue() {
    this.hideme[2] = !this.hideme[2];
  }

  showInspectionReport() {}
}
