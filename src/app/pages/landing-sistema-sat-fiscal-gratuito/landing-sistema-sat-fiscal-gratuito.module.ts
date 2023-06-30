import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSistemaSATFiscalGratuito } from "./landing-sistema-sat-fiscal-gratuito.component";

const routes = [
  {
    path: "",
    component: LandingSistemaSATFiscalGratuito,
  },
];

@NgModule({
  declarations: [LandingSistemaSATFiscalGratuito],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaSATFiscalGratuito],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaSatFiscalGratuitoModule {}
