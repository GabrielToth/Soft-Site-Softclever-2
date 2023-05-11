import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaERP } from './landing-sistema-erp.component'

const routes = [
  {
    path: '',
    component: LandingSistemaERP,
  },
]

@NgModule({
  declarations: [LandingSistemaERP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaERP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaErpModule {}
