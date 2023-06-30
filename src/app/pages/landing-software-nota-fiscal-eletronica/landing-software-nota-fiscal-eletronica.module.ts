import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSoftwareNotaFiscalEletronica } from "./landing-software-nota-fiscal-eletronica.component";

const routes = [
  {
    path: "",
    component: LandingSoftwareNotaFiscalEletronica,
  },
];

@NgModule({
  declarations: [LandingSoftwareNotaFiscalEletronica],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareNotaFiscalEletronica],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareNotaFiscalEletronicaModule {}
