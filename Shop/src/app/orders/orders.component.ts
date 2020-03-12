import { Component, OnInit } from "@angular/core";
import { ShopService } from "../shop.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"]
})
export class OrdersComponent implements OnInit {
  arrayOrders: any;
  pProduct: any;
  error: string;

  constructor(private servcioOrdres: ShopService) {
    this.arrayOrders = [];
    this.pProduct = {};
    this.error = "";
  }

  ngOnInit(): void {
    this.servcioOrdres
      .getAllOrders()
      .then(result => {
        //console.log(result.products[0]._id);
        console.log(result.orders[0].product);
        this.arrayOrders = result.orders;
        this.pProduct = this.servcioOrdres
          .getById(result.orders[0].product)
          .then(product => {
            this.pProduct = product;
          })
          .catch(err => {
            console.log(err);
          });
        // console.log(this.arrayProducts);
      })
      .catch(err => {
        console.log(err.error["message"]);
        this.error = err.error["message"];
      });
  }
}
