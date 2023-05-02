import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'politica-de-privacidade',
  templateUrl: 'politica-de-privacidade.component.html',
  styleUrls: ['politica-de-privacidade.component.css'],
})
export class PoliticaDePrivacidade {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('PoliticaDePrivacidade - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'PoliticaDePrivacidade - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
