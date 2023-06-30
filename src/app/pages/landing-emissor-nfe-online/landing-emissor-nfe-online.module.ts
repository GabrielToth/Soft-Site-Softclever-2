import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { LandingEmissorNFEOnline } from "./landing-emissor-nfe-online.component";

const routes = [
  {
    path: "",
    component: LandingEmissorNFEOnline,
  },
];

@NgModule({
  declarations: [LandingEmissorNFEOnline],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingEmissorNFEOnline],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmissorNfeOnlineModule {}
