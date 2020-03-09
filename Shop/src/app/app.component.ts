import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Shop";

  constructor(private router: Router) {}
  handelClickHome($event) {
    this.router.navigate(["/shop-nav"]);
  }
  handelClickProducts($event) {
    this.router.navigate(["/home"]);
  }
  handelClickLogin($event) {
    this.router.navigate(["/login"]);
  }
  handelClickSignup($event) {
    this.router.navigate(["/signup"]);
  }
}
