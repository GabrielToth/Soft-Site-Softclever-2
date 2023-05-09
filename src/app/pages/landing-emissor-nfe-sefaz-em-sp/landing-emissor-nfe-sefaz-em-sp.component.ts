import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-emissor-nf-sefaz-em-sp',
  templateUrl: 'landing-emissor-nfe-sefaz-em-sp.component.html',
  styleUrls: ['landing-emissor-nfe-sefaz-em-sp.component.css'],
})
export class LandingEmissorNFESefazEmSP {
  rawvwzw: string = ' '
  rawmdbk: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Emissor-NFE-Sefaz-em-SP - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Emissor-NFE-Sefaz-em-SP - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
