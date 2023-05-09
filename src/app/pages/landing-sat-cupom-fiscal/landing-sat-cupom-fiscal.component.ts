import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sa-cupom-fiscal',
  templateUrl: 'landing-sat-cupom-fiscal.component.html',
  styleUrls: ['landing-sat-cupom-fiscal.component.css'],
})
export class LandingSATCupomFiscal {
  rawlo29: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-SAT-Cupom-Fiscal - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-SAT-Cupom-Fiscal - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
