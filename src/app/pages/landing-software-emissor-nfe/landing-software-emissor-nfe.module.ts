import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingSoftwareEmissorNFE } from "./landing-software-emissor-nfe.component";

const routes = [
  {
    path: "",
    component: LandingSoftwareEmissorNFE,
  },
];

@NgModule({
  declarations: [LandingSoftwareEmissorNFE],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareEmissorNFE],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareEmissorNfeModule {}
