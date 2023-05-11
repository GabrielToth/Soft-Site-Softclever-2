import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSoftwareEmpresarial } from './landing-software-empresarial.component'

const routes = [
  {
    path: '',
    component: LandingSoftwareEmpresarial,
  },
]

@NgModule({
  declarations: [LandingSoftwareEmpresarial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareEmpresarial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareEmpresarialModule {}
