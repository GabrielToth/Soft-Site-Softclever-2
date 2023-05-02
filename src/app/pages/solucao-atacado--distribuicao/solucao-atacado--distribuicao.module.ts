import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SolucaoAtacadoEDistribuicao } from './solucao-atacado--distribuicao.component'

const routes = [
  {
    path: 'solucao/AtacadoEDistribuicao',
    component: SolucaoAtacadoEDistribuicao,
  },
]

@NgModule({
  declarations: [SolucaoAtacadoEDistribuicao],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SolucaoAtacadoEDistribuicao],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolucaoAtacadoDistribuicaoModule {}
