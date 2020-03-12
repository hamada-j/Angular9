import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestapiService } from "../restapi.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errores: any[];
  formulario: FormGroup;
  constructor(private usuarioServcio: RestapiService, private router: Router) {
    this.formulario = new FormGroup({
      email: new FormControl("", []),
      password: new FormControl("", [])
    });

    this.errores = [];
  }

  onSubmit() {
    // console.log(this.formulario.value);
    this.usuarioServcio
      .login(this.formulario.value)
      .then(response => {
        localStorage.setItem("token", response.success);
        localStorage.setItem("token_since", new Date().toString());
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(["/login"]);
      });
  }

  ngOnInit(): void {}
}
