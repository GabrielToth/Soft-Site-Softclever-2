import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-nota-fiscal-eletronica',
  templateUrl: 'landing-nota-fiscal-eletronica.component.html',
  styleUrls: ['landing-nota-fiscal-eletronica.component.css'],
})
export class LandingNotaFiscalEletronica {
  rawrt01: string = ' '
  rawbldi: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Nota-Fiscal-Eletronica - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Nota-Fiscal-Eletronica - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
