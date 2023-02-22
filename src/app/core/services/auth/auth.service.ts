import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  apiurl = "http://localhost:8000/user/login";
  constructor(private http: HttpClient) {}
  proceedLogin(userdata: any) {
    return this.http.post(this.apiurl, userdata);
  }
  isLoggedIn() {
    return (
      JSON.parse(localStorage.getItem("ibexUserData"))?.access_token != null
    );
  }
  getAccessToken() {
    return JSON.parse(localStorage.getItem("ibexUserData"))?.access_token || "";
  }
  getRole() {
    return JSON.parse(localStorage.getItem("ibexUserData"))?.role || "";
  }
  haveAccess() {
    // let accessToken =
    //   JSON.parse(localStorage.getItem("ibexUserData"))?.access_token || "";
    // let _extractedToken = accessToken.split(".")[1];
    // let _atobData = atob(_extractedToken);
    // let _finalData = JSON.parse(_atobData);
    // console.log(_finalData);
    let role = this.getRole();
    if (role == "admin") {
      return true;
    }
  }
}
