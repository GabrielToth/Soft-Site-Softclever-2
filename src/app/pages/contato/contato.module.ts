import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../../components/components.module";
import { Contato } from "./contato.component";

const routes = [
  {
    path: "",
    component: Contato,
  },
];

@NgModule({
  declarations: [Contato],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes),
  ],
  exports: [Contato],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContatoModule {}
