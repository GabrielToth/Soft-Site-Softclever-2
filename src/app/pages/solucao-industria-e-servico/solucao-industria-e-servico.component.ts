import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "solucao-industria-servico",
  templateUrl: "solucao-industria-e-servico.component.html",
  styleUrls: ["solucao-industria-e-servico.component.scss"],
})
export class SolucaoIndustriaEServico {
  rawr0ca: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("SolucaoIndustriaEServico - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "SolucaoIndustriaEServico - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
