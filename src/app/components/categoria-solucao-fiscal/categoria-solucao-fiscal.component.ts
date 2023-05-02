import { Component, Input } from '@angular/core'

@Component({
  selector: 'categoria-solucao-fiscal',
  templateUrl: 'categoria-solucao-fiscal.component.html',
  styleUrls: ['categoria-solucao-fiscal.component.css'],
})
export class CategoriaSolucaoFiscal {
  @Input()
  text: string = 'Sped ICMS, IPI, Pis e Cofins e Bloco K completo.'
  @Input()
  heading: string = 'Fiscal'
  @Input()
  Image_alt: string = 'Fiscal'
  @Input()
  Image_src: string =
    'https://www.remessaonline.com.br/blog/wp-content/uploads/2021/01/bloggif_5ff493acd7925.jpeg.webp'
  @Input()
  rootClassName: string = ''
  @Input()
  button: string = 'SAIBA MAIS'
  constructor() {}
}
