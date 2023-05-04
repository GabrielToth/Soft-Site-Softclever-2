import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'landing-sistema-retaguarda-sat',
  templateUrl: 'landing-sistema-retaguarda-sat.component.html',
  styleUrls: ['landing-sistema-retaguarda-sat.component.css'],
})
export class LandingSistemaRetaguardaSAT {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Landing-Sistema-Retaguarda-SAT - Soft Clever')
    this.meta.addTags([
      {
        name: 'description',
        content: 'A solução para a gestão empresarial do seu negócio.',
      },
      {
        property: 'og:title',
        content: 'Landing-Sistema-Retaguarda-SAT - Soft Clever',
      },
      {
        property: 'og:description',
        content: 'A solução ideal para a gestão empresarial do seu negócio.',
      },
    ])
  }
}
