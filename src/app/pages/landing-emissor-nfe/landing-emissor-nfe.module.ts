import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingEmissorNFE } from "./landing-emissor-nfe.component";

const routes = [
  {
    path: "",
    component: LandingEmissorNFE,
  },
];

@NgModule({
  declarations: [LandingEmissorNFE],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingEmissorNFE],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmissorNfeModule {}
