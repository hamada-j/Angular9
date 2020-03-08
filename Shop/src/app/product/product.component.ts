import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ShopService } from "../shop.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  product: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private routing: ShopService,
    private router: Router
  ) {
    this.product = {};
  }
  handelClickBack($event) {
    this.router.navigate(["/products"]);
  }

  ngOnInit() {
    this.activateRoute.params.subscribe(async params => {
      // console.log(Object.values(params)[0]);
      const numIdProduct = Object.values(params)[0];
      // console.log(numIdProduct);
      this.product = await this.routing.getById(numIdProduct);
      console.log(this.product.product.productImage);
    });
  }
}
