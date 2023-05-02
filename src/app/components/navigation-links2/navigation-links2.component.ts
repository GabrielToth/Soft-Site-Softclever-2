import { Component, Input } from '@angular/core'

@Component({
  selector: 'navigation-links2',
  templateUrl: 'navigation-links2.component.html',
  styleUrls: ['navigation-links2.component.css'],
})
export class NavigationLinks2 {
  @Input()
  rootClassName: string = ''
  @Input()
  text1: string = 'Atacado e Distribuição'
  @Input()
  text2: string = 'Indústria e Serviços'
  @Input()
  text: string = 'Varejo'
  @Input()
  text3: string = 'Fiscal'
  constructor() {}
}
