import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-emissor-nfesp',
  templateUrl: 'landing-emissor-nfe-sp.component.html',
  styleUrls: ['landing-emissor-nfe-sp.component.css'],
})
export class LandingEmissorNFESP {
  raw3nqk: string = ' '
  rawf2xh: string = ' '
  rawamyp: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Emissor-NFE-SP - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Emissor-NFE-SP - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
