import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { LandingEmitirNotaFiscalEletronica } from './landing-emitir-nota-fiscal-eletronica.component'

const routes = [
  {
    path: '',
    component: LandingEmitirNotaFiscalEletronica,
  },
]

@NgModule({
  declarations: [LandingEmitirNotaFiscalEletronica],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [LandingEmitirNotaFiscalEletronica],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingEmitirNotaFiscalEletronicaModule {}
