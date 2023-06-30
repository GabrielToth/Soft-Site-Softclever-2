import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "solucao-atacado--distribuicao",
  templateUrl: "solucao-atacado--distribuicao.component.html",
  styleUrls: ["solucao-atacado--distribuicao.component.css"],
})
export class SolucaoAtacadoEDistribuicao {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("SolucaoAtacadoEDistribuicao - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "SolucaoAtacadoEDistribuicao - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
