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
    this.baseUrl = "http://localhost:3000/api/student";
  }

  // Metodos
  getAll(): Promise<any> {
    return this.httpClient.get(this.baseUrl).toPromise();
  }

  // Metodos con parametros
  getById(pAlumnoId): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}/${pAlumnoId}`).toPromise();
  }

  create(value): Promise<any> {
    return this.httpClient.get(this.baseUrl, value).toPromise();
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
    return this.httpClient.delete(this.baseUrl, httpOptions).toPromise();
  }
}
