import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { SolucaoIndustriaEServico } from './solucao-industria--servico.component'

const routes = [
  {
    path: '',
    component: SolucaoIndustriaEServico,
  },
]

@NgModule({
  declarations: [SolucaoIndustriaEServico],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [SolucaoIndustriaEServico],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolucaoIndustriaServicoModule {}
