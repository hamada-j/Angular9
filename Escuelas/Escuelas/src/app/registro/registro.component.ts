import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RestapiService } from "../restapi.service";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"]
})
export class RegistroComponent implements OnInit {
  errores: any[];
  formulario: FormGroup;
  constructor(private usuarioServcio: RestapiService) {
    this.formulario = new FormGroup({
      username: new FormControl(" ", []),

      email: new FormControl("", []),
      password: new FormControl("", [])
    });
    this.errores = [];
  }

  onSubmit() {
    // console.log(this.formulario.value);
    this.usuarioServcio
      .register(this.formulario.value)
      .then(response => console.log(response["success"]))
      .catch(err => {
        // console.log(err.error);
        this.errores = err.error;
      });
  }

  ngOnInit(): void {}
}
