import { Component, Input } from "@angular/core";

@Component({
  selector: "categoria-solucao-varejo",
  templateUrl: "categoria-solucao-varejo.component.html",
  styleUrls: ["categoria-solucao-varejo.component.css"],
})
export class CategoriaSolucaoVarejo {
  @Input()
  link_text1: string = "https://example.com";
  @Input()
  text2: string =
    "Emissor S@T fiscal e NFC-e com integração aos módulos Pré-venda, Delivery, Comandas, Sirius App Comandas e Pré-venda, Sirius Web Lojas, Sirius Market Place e cartão de crédito/TEF.";
  @Input()
  link_text: string = "https://example.com";
  @Input()
  button: string = "SAIBA MAIS";
  @Input()
  text1: string = "Varejo";
  @Input()
  Image_alt: string = "image";
  @Input()
  Image_src: string = "/assets/playground_assets/comercio-varejista-1500w.webp";
  @Input()
  rootClassName: string = "";
  constructor() {}
}
