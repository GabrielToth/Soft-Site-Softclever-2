import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaDeGestaoERP } from './landing-sistema-de-gestao-erp.component'

const routes = [
  {
    path: '',
    component: LandingSistemaDeGestaoERP,
  },
]

@NgModule({
  declarations: [LandingSistemaDeGestaoERP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaDeGestaoERP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaDeGestaoErpModule {}
