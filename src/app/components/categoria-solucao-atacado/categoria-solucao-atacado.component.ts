import { Component, Input } from "@angular/core";

@Component({
  selector: "categoria-solucao-atacado",
  templateUrl: "categoria-solucao-atacado.component.html",
  styleUrls: ["categoria-solucao-atacado.component.css"],
})
export class CategoriaSolucaoAtacado {
  @Input()
  Image_src: string =
    "/assets/images/atacado-e-distribuicao-1500w.webp";
  @Input()
  text: string =
    "NF-e, CT-e, NFS-e, Vendas, Liberação e Expedição de Pedidos, Reserva, Troca/Devolução, Financeiro, Cobrança, Compras e muito mais.";
  @Input()
  button: string = "SAIBA MAIS";
  @Input()
  rootClassName: string = "";
  @Input()
  heading: string = "Atacado e Distribuição";
  @Input()
  Image_alt: string = "Atacado e Distribuição";
  constructor() {}
}
