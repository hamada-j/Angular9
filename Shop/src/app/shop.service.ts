import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ShopService {
  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }
  ////////////////// PRODUCT /////////////////////
  // Metodos
  getAll(): Promise<any> {
    return this.httpClient.get(`${this.baseUrl}products`).toPromise();
  }

  // Metodos con parametros
  getById(pProductId): Promise<any> {
    return this.httpClient
      .get(`${this.baseUrl}products/${pProductId}`)
      .toPromise();
  }

  addProduct(values): Promise<any> {
    return this.httpClient.post(this.baseUrl, values).toPromise();
  }

  editProduct(values): Promise<any> {
    return this.httpClient.patch(this.baseUrl, values).toPromise();
  }

  // El Metedo DELETE necesita de un segundo pametro que es la cabecera HTTP
  delete(pProductId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: {
        productId: pProductId
      }
    };
    return this.httpClient.delete(this.baseUrl, httpOptions).toPromise();
  }

  //////////////////// CLIENT AND ADMIN /////////////////////

  // Metodos con parametros
  login(values): Promise<any> {
    return this.httpClient
      .post(`${this.baseUrl}client/login`, values)
      .toPromise();
  }

  signup(values): Promise<any> {
    console.log(values);
    return this.httpClient
      .post(`${this.baseUrl}client/signup`, values)
      .toPromise();
  }

  ///// ADMIN ONLY //////
  deleteClient(clientId): Promise<any> {
    console.log(clientId);
    return this.httpClient
      .delete(`${this.baseUrl}client/${clientId}`)
      .toPromise();
  }

  //////////////////// CLIENT AND ORDERS /////////////////////
  ///// ADMIN ONLY //////
  // Metodos
  getAllOrders(token): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient.get(`${this.baseUrl}ordres`).toPromise();
  }
  getOrder(token, orderId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .get(`${this.baseUrl}ordres/${orderId}`, httpOptions)
      .toPromise();
  }
  deleteOrder(token, orderId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .delete(`${this.baseUrl}ordres/${orderId}`, httpOptions)
      .toPromise();
  }

  makelOrder(token, productId): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    };
    return this.httpClient
      .post(`${this.baseUrl}ordres`, productId, httpOptions)
      .toPromise();
  }
}
