import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sa-fiscal',
  templateUrl: 'landing-sat-fiscal.component.html',
  styleUrls: ['landing-sat-fiscal.component.css'],
})
export class LandingSATFiscal {
  rawov35: string = ' '
  rawad55: string = ' '
  rawbwg3: string = ' '
  rawoxqx: string = ' '
  rawxj1h: string = ' '
  rawtaxv: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-SAT-Fiscal - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-SAT-Fiscal - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
