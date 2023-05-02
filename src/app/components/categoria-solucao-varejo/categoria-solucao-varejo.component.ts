import { Component, Input } from '@angular/core'

@Component({
  selector: 'categoria-solucao-varejo',
  templateUrl: 'categoria-solucao-varejo.component.html',
  styleUrls: ['categoria-solucao-varejo.component.css'],
})
export class CategoriaSolucaoVarejo {
  @Input()
  button: string = 'SAIBA MAIS'
  @Input()
  heading: string = 'Varejo'
  @Input()
  text: string =
    'Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.'
  @Input()
  Image_alt: string = 'image'
  @Input()
  Image_src: string = '/assets/playground_assets/comercio-varejista-1500w.webp'
  @Input()
  rootClassName: string = ''
  constructor() {}
}
