import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-videos',
  templateUrl: 'videos.component.html',
  styleUrls: ['videos.component.css'],
})
export class Videos {
  @Input()
  rootClassName: string = ''
  @Input()
  heading: string = 'Soft Clever na Mídia'
  @Input()
  heading1: string = 'Produtos e Serviços'
  @Input()
  text1: string = 'Conheça nossos produtos e serviços em apenas 1 minuto'
  @Input()
  text: string = 'Reportagem exibida na Band News'
  constructor() {}
}
