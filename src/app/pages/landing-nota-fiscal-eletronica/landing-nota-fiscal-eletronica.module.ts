import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingNotaFiscalEletronica } from "./landing-nota-fiscal-eletronica.component";

const routes = [
  {
    path: "",
    component: LandingNotaFiscalEletronica,
  },
];

@NgModule({
  declarations: [LandingNotaFiscalEletronica],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingNotaFiscalEletronica],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingNotaFiscalEletronicaModule {}
