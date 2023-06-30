import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSATCupomFiscal } from "./landing-sat-cupom-fiscal.component";

const routes = [
  {
    path: "",
    component: LandingSATCupomFiscal,
  },
];

@NgModule({
  declarations: [LandingSATCupomFiscal],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSATCupomFiscal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSatCupomFiscalModule {}
