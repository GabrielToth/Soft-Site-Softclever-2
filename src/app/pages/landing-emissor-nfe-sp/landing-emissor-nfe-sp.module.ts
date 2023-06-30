import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingEmissorNFESP } from "./landing-emissor-nfe-sp.component";

const routes = [
  {
    path: "",
    component: LandingEmissorNFESP,
  },
];

@NgModule({
  declarations: [LandingEmissorNFESP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingEmissorNFESP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmissorNfeSpModule {}
