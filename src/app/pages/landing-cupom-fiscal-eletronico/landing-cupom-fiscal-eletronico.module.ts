import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingCupomFiscalEletronico } from "./landing-cupom-fiscal-eletronico.component";

const routes = [
  {
    path: "",
    component: LandingCupomFiscalEletronico,
  },
];

@NgModule({
  declarations: [LandingCupomFiscalEletronico],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingCupomFiscalEletronico],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingCupomFiscalEletronicoModule {}
