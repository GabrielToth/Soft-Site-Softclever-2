import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'solucao-varejo',
  templateUrl: 'solucao-varejo.component.html',
  styleUrls: ['solucao-varejo.component.css'],
})
export class SolucaoVarejo {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SolucaoVarejo - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'SolucaoVarejo - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
