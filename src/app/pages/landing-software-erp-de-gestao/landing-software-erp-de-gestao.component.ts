import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-software-er-de-gestao',
  templateUrl: 'landing-software-erp-de-gestao.component.html',
  styleUrls: ['landing-software-erp-de-gestao.component.css'],
})
export class LandingSoftwareERPDeGestao {
  rawk1fd: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Software-ERP-de-Gestao - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Software-ERP-de-Gestao - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
