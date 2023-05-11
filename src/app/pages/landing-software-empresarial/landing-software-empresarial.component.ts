import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-software-empresarial',
  templateUrl: 'landing-software-empresarial.component.html',
  styleUrls: ['landing-software-empresarial.component.css'],
})
export class LandingSoftwareEmpresarial {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Software-Empresarial - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Software-Empresarial - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
