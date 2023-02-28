import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class GeneralSettingsService {
  apiurl = "http://localhost:8000/Setting/Metrics/";

  constructor(private http: HttpClient) {}

  getGeneralSettings() {
    return this.http.get(this.apiurl);
  }

  updateGeneralSettings(metricsBody) {
    return this.http.put(this.apiurl, metricsBody);
  }
}
