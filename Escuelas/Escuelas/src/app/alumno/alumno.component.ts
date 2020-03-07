import { Component, OnInit } from "@angular/core";
import { ActionSequence } from "protractor";
import { ActivatedRoute } from "@angular/router";
import { RestapiService } from "../restapi.service";

@Component({
  selector: "app-alumno",
  templateUrl: "./alumno.component.html",
  styleUrls: ["./alumno.component.css"]
})
export class AlumnoComponent implements OnInit {
  alumno: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private routing: RestapiService
  ) {
    this.alumno = {};
  }

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.activateRoute.params.subscribe(async prams => {
      this.alumno = await this.routing.getById(prams.alumnoId);
      console.log(this.alumno);
    });
  }
}
