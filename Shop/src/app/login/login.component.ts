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
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();
  formSignup: FormGroup;
  constructor(private servcioSignup: ShopService) {
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
  }
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.formSignup.value);
    this.servcioSignup.login(this.formSignup.value);
    this.formSignup.reset();
  }
}
