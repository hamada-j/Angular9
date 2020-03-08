import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ShopService } from "../shop.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  arrayProducts: any;
  constructor(private routing: ShopService, private router: Router) {
    this.arrayProducts = [];
  }

  ngOnInit(): void {
    this.routing
      .getAll()
      .then(result => {
        //console.log(result.products[0]._id);
        // console.table(result);
        this.arrayProducts = result.products;
        // console.log(this.arrayProducts);
      })
      .catch(err => {
        console.log(err);
      });
  }
}
