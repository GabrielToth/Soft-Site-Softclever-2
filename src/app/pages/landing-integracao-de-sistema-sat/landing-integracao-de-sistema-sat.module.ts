import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingIntegracaoDeSistemaSAT } from "./landing-integracao-de-sistema-sat.component";

const routes = [
  {
    path: "",
    component: LandingIntegracaoDeSistemaSAT,
  },
];

@NgModule({
  declarations: [LandingIntegracaoDeSistemaSAT],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingIntegracaoDeSistemaSAT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingIntegracaoDeSistemaSatModule {}
