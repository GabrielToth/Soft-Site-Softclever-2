import { Component, Input } from "@angular/core";

@Component({
  selector: "categoria-solucao-industria",
  templateUrl: "categoria-solucao-industria.component.html",
  styleUrls: ["categoria-solucao-industria.component.css"],
})
export class CategoriaSolucaoIndustria {
  @Input()
  text: string =
    "Ordens de produção com explosão de matéria prima e lote. Controle Completo de Assistência Técnica.";
  @Input()
  rootClassName: string = "";
  @Input()
  heading: string = "Indústria e Serviço";
  @Input()
  Image_alt: string = "image";
  @Input()
  button: string = "SAIBA MAIS";
  @Input()
  Image_src: string =
    "https://images.unsplash.com/photo-1455165814004-1126a7199f9b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGluZHVzdHJ5fGVufDB8fHx8MTY4MTIyNDgxNw&ixlib=rb-4.0.3&h=200";
  constructor() {}
}
