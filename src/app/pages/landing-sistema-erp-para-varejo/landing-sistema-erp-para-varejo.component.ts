import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sistema-er-para-varejo',
  templateUrl: 'landing-sistema-erp-para-varejo.component.html',
  styleUrls: ['landing-sistema-erp-para-varejo.component.css'],
})
export class LandingSistemaERPParaVarejo {
  rawpihg: string = ' '
  rawvgms: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Sistema-ERP-para-Varejo - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Sistema-ERP-para-Varejo - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
