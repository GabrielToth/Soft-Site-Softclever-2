import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSistemaERPParaEmpresa } from "./landing-sistema-erp-para-empresa.component";

const routes = [
  {
    path: "",
    component: LandingSistemaERPParaEmpresa,
  },
];

@NgModule({
  declarations: [LandingSistemaERPParaEmpresa],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaERPParaEmpresa],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaErpParaEmpresaModule {}
