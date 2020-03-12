import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlumnosComponent } from "./alumnos/alumnos.component";
import { FormalumnoComponent } from "./formalumno/formalumno.component";
import { AlumnoComponent } from "./alumno/alumno.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "./login.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "alumnos"
  },
  {
    path: "alumnos",
    component: AlumnosComponent,
    canActivate: [LoginGuard]
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
    path: "register",
    component: RegistroComponent
  },

  {
    path: "login",
    component: LoginComponent
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
