import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sistema-nf-em-sp',
  templateUrl: 'landing-sistema-nfe-em-sp.component.html',
  styleUrls: ['landing-sistema-nfe-em-sp.component.css'],
})
export class LandingSistemaNFEEmSP {
  rawa15x: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Sistema-NFE-em-SP - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Sistema-NFE-em-SP - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
