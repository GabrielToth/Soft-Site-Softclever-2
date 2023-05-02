import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contato',
  templateUrl: 'contato.component.html',
  styleUrls: ['contato.component.css'],
})
export class Contato {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Contato - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Contato - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
