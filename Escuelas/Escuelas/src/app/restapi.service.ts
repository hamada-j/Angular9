import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { promise } from "protractor";

@Injectable({
  providedIn: "root"
})
export class RestapiService {
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/api/student";
  }
  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  getById(pAlumnoId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pAlumnoId}`).toPromise();
  }

  create(value): Promise<any> {
    return this.httpClient.get(this.baseUrl, value).toPromise();
  }
  delete(pAlumnoId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: {
        studentId: pAlumnoId
      }
    };
    return this.httpClient.delete(this.baseUrl, httpOptions).toPromise();
  }
}
