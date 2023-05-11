import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sistema-er-de-gestao',
  templateUrl: 'landing-sistema-erp-de-gestao.component.html',
  styleUrls: ['landing-sistema-erp-de-gestao.component.css'],
})
export class LandingSistemaERPDeGestao {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Sistema-ERP-de-Gestao - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Sistema-ERP-de-Gestao - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
