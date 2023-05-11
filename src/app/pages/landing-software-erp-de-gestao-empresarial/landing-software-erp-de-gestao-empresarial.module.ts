import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSoftwareERPDeGestaoEmpresarial } from './landing-software-erp-de-gestao-empresarial.component'

const routes = [
  {
    path: '',
    component: LandingSoftwareERPDeGestaoEmpresarial,
  },
]

@NgModule({
  declarations: [LandingSoftwareERPDeGestaoEmpresarial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSoftwareERPDeGestaoEmpresarial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareErpDeGestaoEmpresarialModule {}
