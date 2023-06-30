import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingERPSistema } from "./landing-erp-sistema.component";

const routes = [
  {
    path: "",
    component: LandingERPSistema,
  },
];

@NgModule({
  declarations: [LandingERPSistema],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingERPSistema],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingErpSistemaModule {}
