import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { ShopService } from "../shop.service";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router } from "@angular/router";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: "app-singup",
  templateUrl: "./singup.component.html",
  styleUrls: ["./singup.component.css"]
})
export class SingupComponent implements OnInit {
  errores: any[];
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

  formSignup: FormGroup;
  constructor(private servcioSignup: ShopService, private router: Router) {
    this.formSignup = new FormGroup({
      email: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl(" ", [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.errores = [];
  }

  onSubmit() {
    // console.log(this.formSignup.value);
    this.servcioSignup
      .signup(this.formSignup.value)
      .then(response => {
        console.log(response);
        this.router.navigate(["/orders"]);
      })
      .catch(err => {
        // console.log(err.error);
        this.errores = err.error;
      });
    this.formSignup.reset();
  }

  ngOnInit(): void {}
}
