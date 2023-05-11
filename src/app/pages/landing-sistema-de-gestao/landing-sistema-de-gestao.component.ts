import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sistema-de-gestao',
  templateUrl: 'landing-sistema-de-gestao.component.html',
  styleUrls: ['landing-sistema-de-gestao.component.css'],
})
export class LandingSistemaDeGestao {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Sistema-de-Gestao - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Sistema-de-Gestao - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
