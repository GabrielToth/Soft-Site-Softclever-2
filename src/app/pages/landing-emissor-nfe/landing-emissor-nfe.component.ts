import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-emissor-nfe',
  templateUrl: 'landing-emissor-nfe.component.html',
  styleUrls: ['landing-emissor-nfe.component.css'],
})
export class LandingEmissorNFE {
  rawhizb: string = ' '
  raw5uw5: string = ' '
  raws6mr: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Emissor-NFE - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Emissor-NFE - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
