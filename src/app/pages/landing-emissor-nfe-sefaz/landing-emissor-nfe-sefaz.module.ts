import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingEmissorNFESefaz } from './landing-emissor-nfe-sefaz.component'

const routes = [
  {
    path: '',
    component: LandingEmissorNFESefaz,
  },
]

@NgModule({
  declarations: [LandingEmissorNFESefaz],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingEmissorNFESefaz],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmissorNfeSefazModule {}
