import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'solucao-fiscal',
  templateUrl: 'solucao-fiscal.component.html',
  styleUrls: ['solucao-fiscal.component.css'],
})
export class SolucaoFiscal {
  raw1ev7: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SolucaoFiscal - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'SolucaoFiscal - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
