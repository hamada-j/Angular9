import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlumnosComponent } from "./alumnos/alumnos.component";
import { FormalumnoComponent } from "./formalumno/formalumno.component";
import { AlumnoComponent } from "./alumno/alumno.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "alumnos"
  },
  {
    path: "alumnos",
    component: AlumnosComponent
  },
  {
    path: "alumnos/:alumnoId",
    component: AlumnoComponent
  },
  {
    path: "formulario",
    component: FormalumnoComponent
  },
  {
    path: "**",
    redirectTo: "alumnos"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
