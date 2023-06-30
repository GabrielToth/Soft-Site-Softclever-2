import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSistemaDeGestaoEmpresarial } from "./landing-sistema-de-gestao-empresarial.component";

const routes = [
  {
    path: "",
    component: LandingSistemaDeGestaoEmpresarial,
  },
];

@NgModule({
  declarations: [LandingSistemaDeGestaoEmpresarial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaDeGestaoEmpresarial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaDeGestaoEmpresarialModule {}
