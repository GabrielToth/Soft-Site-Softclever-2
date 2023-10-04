import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { TitleService } from "./title.service";

@Component({
  selector: "solucao-varejo",
  templateUrl: "solucao-varejo.component.html",
  styleUrls: ["solucao-varejo.component.scss"],
})
export class SolucaoVarejo {
  constructor(private title: Title, private meta: Meta, private titleService: TitleService) {
    this.title.setTitle("SolucaoVarejo - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "SolucaoVarejo - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
    this.titleService.addScript('https://www.googletagmanager.com/gtm.js?id=GTM-WPTFDXDG');
  }
}
