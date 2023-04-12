import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SolucaoFiscal } from './solucao-fiscal.component'

const routes = [
  {
    path: '',
    component: SolucaoFiscal,
  },
]

@NgModule({
  declarations: [SolucaoFiscal],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SolucaoFiscal],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolucaoFiscalModule {}
