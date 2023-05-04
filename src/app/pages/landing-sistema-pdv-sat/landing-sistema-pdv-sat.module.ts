import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSistemaPDVSAT } from './landing-sistema-pdv-sat.component'

const routes = [
  {
    path: '',
    component: LandingSistemaPDVSAT,
  },
]

@NgModule({
  declarations: [LandingSistemaPDVSAT],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSistemaPDVSAT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaPdvSatModule {}
