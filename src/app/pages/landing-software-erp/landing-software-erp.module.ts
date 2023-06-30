import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSoftwareERP } from "./landing-software-erp.component";

const routes = [
  {
    path: "",
    component: LandingSoftwareERP,
  },
];

@NgModule({
  declarations: [LandingSoftwareERP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareERP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareErpModule {}
