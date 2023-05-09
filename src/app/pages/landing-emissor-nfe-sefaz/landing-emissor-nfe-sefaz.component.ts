import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-emissor-nf-sefaz',
  templateUrl: 'landing-emissor-nfe-sefaz.component.html',
  styleUrls: ['landing-emissor-nfe-sefaz.component.css'],
})
export class LandingEmissorNFESefaz {
  rawdqjp: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Emissor-NFE-Sefaz - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Emissor-NFE-Sefaz - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
