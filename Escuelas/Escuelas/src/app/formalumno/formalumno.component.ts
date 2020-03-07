import { Component, OnInit } from "@angular/core";
import { RestapiService } from "../restapi.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-formalumno",
  templateUrl: "./formalumno.component.html",
  styleUrls: ["./formalumno.component.css"]
})
export class FormalumnoComponent implements OnInit {
  pTitulo: string;
  pAutor: string;
  pImagen: string;
  pCategoria: string;
  pTexto: string;
  formulario: FormGroup;

  constructor(private servcioPosting: RestapiService) {
    this.formulario = new FormGroup({
      nombre: new FormControl(" ", []),
      apellidos: new FormControl(" ", []),
      email: new FormControl("", []),
      edad: new FormControl("", []),
      matricula: new FormControl("", [])
    });
  }

  // handelClick($event) {
  //   this.router.navigate(["/posts"]);
  // }

  onSubmit() {
    console.log(this.formulario.value);
    this.servcioPosting
      .create(this.formulario.value)
      .then(
        item => console.log(item)
        // this.routre.navigate(['/alumno'])
      )
      .catch(err => {
        console.log(err);
      });
  }

  ngOnInit(): void {}
}
