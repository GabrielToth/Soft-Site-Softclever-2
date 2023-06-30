import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSistemaRetaguardaSAT } from "./landing-sistema-retaguarda-sat.component";

const routes = [
  {
    path: "",
    component: LandingSistemaRetaguardaSAT,
  },
];

@NgModule({
  declarations: [LandingSistemaRetaguardaSAT],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaRetaguardaSAT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaRetaguardaSatModule {}
