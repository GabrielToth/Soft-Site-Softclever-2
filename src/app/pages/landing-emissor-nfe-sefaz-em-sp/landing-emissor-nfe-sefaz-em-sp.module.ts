import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingEmissorNFESefazEmSP } from './landing-emissor-nfe-sefaz-em-sp.component'

const routes = [
  {
    path: '',
    component: LandingEmissorNFESefazEmSP,
  },
]

@NgModule({
  declarations: [LandingEmissorNFESefazEmSP],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingEmissorNFESefazEmSP],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmissorNfeSefazEmSpModule {}
