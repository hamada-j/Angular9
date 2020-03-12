import { Component, OnInit } from "@angular/core";
import { RestapiService } from "../restapi.service";
import { getAllLifecycleHooks } from "@angular/compiler/src/lifecycle_reflector";
import { Router } from "@angular/router";

@Component({
  selector: "app-alumnos",
  templateUrl: "./alumnos.component.html",
  styleUrls: ["./alumnos.component.css"]
})
export class AlumnosComponent implements OnInit {
  arrayAlumnos: any;
  constructor(private routing: RestapiService, private router: Router) {
    this.arrayAlumnos = [];
  }

  manejarClick(dessert) {
    console.log(dessert.id);
    this.routing
      .delete(dessert.id)
      .then(async item => {
        console.log(item);
        this.arrayAlumnos = await this.routing.getAll();
      })
      .catch(err => {
        console.log(err);
      });
  }

  // detalle(dessert) {
  //   console.log(dessert.id);
  //   this.routing
  //     .getById(dessert.id)
  //     .then(item => {
  //       console.log(item);
  //       this.router.navigate(["/alumno"]);
  //       // enrutar
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  ngOnInit(): void {
    this.routing
      .getAll()
      .then(result => {
        console.table(result);
        this.arrayAlumnos = result;
        console.log(this.arrayAlumnos);
      })
      .catch(err => {
        console.log(err);
        this.arrayAlumnos = [];
      });
  }
}
