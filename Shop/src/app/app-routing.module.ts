import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductComponent } from "./product/product.component";
import { SingupComponent } from "./singup/singup.component";
import { LoginComponent } from "./login/login.component";
import { AppComponent } from "./app.component";
import { OrdersComponent } from "./orders/orders.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: "app",
    component: AppComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "home/:products._id",
    component: ProductComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SingupComponent
  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
