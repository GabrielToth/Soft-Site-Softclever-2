import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-equipamento-sat',
  templateUrl: 'landing-equipamento-sat.component.html',
  styleUrls: ['landing-equipamento-sat.component.css'],
})
export class LandingEquipamentoSAT {
  raww4b3: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Equipamento-SAT - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Equipamento-SAT - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
