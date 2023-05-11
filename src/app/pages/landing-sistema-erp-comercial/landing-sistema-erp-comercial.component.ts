import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sistema-er-comercial',
  templateUrl: 'landing-sistema-erp-comercial.component.html',
  styleUrls: ['landing-sistema-erp-comercial.component.css'],
})
export class LandingSistemaERPComercial {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Sistema-ERP-Comercial - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Sistema-ERP-Comercial - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
