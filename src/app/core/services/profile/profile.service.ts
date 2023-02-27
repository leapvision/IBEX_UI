import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(userID: any) {
    let apiurl = `http://localhost:8000/user/${userID}/`;
    return this.http.get(apiurl);
  }
}
