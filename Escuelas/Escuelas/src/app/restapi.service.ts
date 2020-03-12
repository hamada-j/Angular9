import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class RestapiService {
  // Declarar la vaiable base de la ruta
  baseUrl: string;
  constructor(private httpClient: HttpClient) {
    // Inicializacion y asignamiento de valor de la URL del servidor
    this.baseUrl = "http://localhost:3000/api/";
  }

  // Metodos
  getAll(): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "user-token": localStorage.getItem("token")
      })
    };
    return this.httpClient
      .get(`${this.baseUrl}student`, httpOptions)
      .toPromise();
  }

  // Metodos con parametros
  getById(pAlumnoId): Promise<any> {
    return this.httpClient
      .get(`${this.baseUrl}student/${pAlumnoId}`)
      .toPromise();
  }

  create(value): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}student`, value).toPromise();
  }

  // El Metedo DELETE necesita de un segundo pametro que es la cabecera HTTP
  delete(pAlumnoId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: {
        studentId: pAlumnoId
      }
    };
    return this.httpClient
      .delete(`${this.baseUrl}student`, httpOptions)
      .toPromise();
  }

  register(values): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}users/register`, values)
      .toPromise();
  }
  login(values): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}users/login`, values)
      .toPromise();
  }
}
