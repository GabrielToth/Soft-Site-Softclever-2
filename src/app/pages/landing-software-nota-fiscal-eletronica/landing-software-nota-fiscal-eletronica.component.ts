import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-software-nota-fiscal-eletronica',
  templateUrl: 'landing-software-nota-fiscal-eletronica.component.html',
  styleUrls: ['landing-software-nota-fiscal-eletronica.component.css'],
})
export class LandingSoftwareNotaFiscalEletronica {
  rawo1vt: string = ' '
  rawljc6: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Software-Nota-Fiscal-Eletronica - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Software-Nota-Fiscal-Eletronica - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
