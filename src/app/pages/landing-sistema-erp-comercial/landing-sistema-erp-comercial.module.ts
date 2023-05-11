import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaERPComercial } from './landing-sistema-erp-comercial.component'

const routes = [
  {
    path: '',
    component: LandingSistemaERPComercial,
  },
]

@NgModule({
  declarations: [LandingSistemaERPComercial],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaERPComercial],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaErpComercialModule {}
