import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ConfigureLineSettingsService {
  apiurl = "http://localhost:8000/Setting/Line/";

  constructor(private http: HttpClient) {}

  getAllLines() {
    return this.http.get(this.apiurl);
  }
}
