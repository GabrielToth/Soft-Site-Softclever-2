import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-cupom-fiscal-eletronico',
  templateUrl: 'landing-cupom-fiscal-eletronico.component.html',
  styleUrls: ['landing-cupom-fiscal-eletronico.component.css'],
})
export class LandingCupomFiscalEletronico {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Cupom-Fiscal-Eletronico - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Cupom-Fiscal-Eletronico - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
