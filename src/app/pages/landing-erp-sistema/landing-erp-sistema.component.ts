import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-er-sistema',
  templateUrl: 'landing-erp-sistema.component.html',
  styleUrls: ['landing-erp-sistema.component.css'],
})
export class LandingERPSistema {
  rawp6ms: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-ERP-Sistema - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-ERP-Sistema - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
