import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingERP } from "./landing-erp.component";

const routes = [
  {
    path: "",
    component: LandingERP,
  },
];

@NgModule({
  declarations: [LandingERP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingERP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingErpModule {}
