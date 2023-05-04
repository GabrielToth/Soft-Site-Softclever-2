import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingSAT } from './landing-sat.component'

const routes = [
  {
    path: '',
    component: LandingSAT,
  },
]

@NgModule({
  declarations: [LandingSAT],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingSAT],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSatModule {}
