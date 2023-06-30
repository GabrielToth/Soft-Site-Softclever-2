import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSoftwareSAT } from "./landing-software-sat.component";

const routes = [
  {
    path: "",
    component: LandingSoftwareSAT,
  },
];

@NgModule({
  declarations: [LandingSoftwareSAT],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareSAT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareSatModule {}
