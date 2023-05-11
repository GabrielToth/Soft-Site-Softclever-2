import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaERPDeGestao } from './landing-sistema-erp-de-gestao.component'

const routes = [
  {
    path: '',
    component: LandingSistemaERPDeGestao,
  },
]

@NgModule({
  declarations: [LandingSistemaERPDeGestao],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaERPDeGestao],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaErpDeGestaoModule {}
