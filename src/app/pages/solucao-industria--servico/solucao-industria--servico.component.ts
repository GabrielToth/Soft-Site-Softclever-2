import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'solucao-industria--servico',
  templateUrl: 'solucao-industria--servico.component.html',
  styleUrls: ['solucao-industria--servico.component.css'],
})
export class SolucaoIndustriaEServico {
  rawdbjy: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SolucaoIndustriaEServico - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'SolucaoIndustriaEServico - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
