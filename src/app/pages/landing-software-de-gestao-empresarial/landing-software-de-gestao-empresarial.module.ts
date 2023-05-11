import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSoftwareDeGestaoEmpresarial } from './landing-software-de-gestao-empresarial.component'

const routes = [
  {
    path: '',
    component: LandingSoftwareDeGestaoEmpresarial,
  },
]

@NgModule({
  declarations: [LandingSoftwareDeGestaoEmpresarial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareDeGestaoEmpresarial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareDeGestaoEmpresarialModule {}
