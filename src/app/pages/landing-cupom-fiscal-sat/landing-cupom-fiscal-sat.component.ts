import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-cupom-fiscal-sat',
  templateUrl: 'landing-cupom-fiscal-sat.component.html',
  styleUrls: ['landing-cupom-fiscal-sat.component.css'],
})
export class LandingCupomFiscalSAT {
  rawisuf: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Cupom-fiscal-SAT - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Cupom-fiscal-SAT - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
