import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaEmpresarial } from './landing-sistema-empresarial.component'

const routes = [
  {
    path: '',
    component: LandingSistemaEmpresarial,
  },
]

@NgModule({
  declarations: [LandingSistemaEmpresarial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaEmpresarial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaEmpresarialModule {}
