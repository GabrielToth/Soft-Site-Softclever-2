import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSATDesenvolvedor } from './landing-sat-desenvolvedor.component'

const routes = [
  {
    path: '',
    component: LandingSATDesenvolvedor,
  },
]

@NgModule({
  declarations: [LandingSATDesenvolvedor],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSATDesenvolvedor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSatDesenvolvedorModule {}
