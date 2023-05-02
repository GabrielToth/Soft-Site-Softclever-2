import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  text10: string = '+55 (11) 2361-8334'
  @Input()
  text8: string = 'softclever@softclever.com.br'
  @Input()
  image_alt: string = 'logo'
  @Input()
  rootClassName: string = ''
  @Input()
  text: string = '© 1994 Soft Clever Informática ERP, All Rights Reserved.'
  @Input()
  text7: string = 'Entre em Contato'
  @Input()
  text9: string = '+55 (11) 3991-3923'
  @Input()
  text1: string = 'Legal'
  @Input()
  text4: string = 'Atacado e Distribuição'
  @Input()
  text6: string = 'Fiscal'
  @Input()
  text3: string = 'Varejo'
  @Input()
  text11: string = 'Follow Us'
  @Input()
  text2: string = 'Para quem?'
  @Input()
  text31: string = 'Varejo2'
  @Input()
  image_src: string =
    '/assets/playground_assets/logo%20soft%20clever%20branca%20height32-1500h.png'
  @Input()
  text5: string = 'Industria e Serviço'
  constructor() {}
}
