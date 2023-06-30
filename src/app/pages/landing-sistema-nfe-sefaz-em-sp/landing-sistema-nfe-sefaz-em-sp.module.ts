import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSistemaNFESefazEmSP } from "./landing-sistema-nfe-sefaz-em-sp.component";

const routes = [
  {
    path: "",
    component: LandingSistemaNFESefazEmSP,
  },
];

@NgModule({
  declarations: [LandingSistemaNFESefazEmSP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaNFESefazEmSP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaNfeSefazEmSpModule {}
