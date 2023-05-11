import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaDeGestao } from './landing-sistema-de-gestao.component'

const routes = [
  {
    path: '',
    component: LandingSistemaDeGestao,
  },
]

@NgModule({
  declarations: [LandingSistemaDeGestao],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaDeGestao],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaDeGestaoModule {}
