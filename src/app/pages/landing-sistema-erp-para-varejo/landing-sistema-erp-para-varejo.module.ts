import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSistemaERPParaVarejo } from "./landing-sistema-erp-para-varejo.component";

const routes = [
  {
    path: "",
    component: LandingSistemaERPParaVarejo,
  },
];

@NgModule({
  declarations: [LandingSistemaERPParaVarejo],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaERPParaVarejo],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaErpParaVarejoModule {}
