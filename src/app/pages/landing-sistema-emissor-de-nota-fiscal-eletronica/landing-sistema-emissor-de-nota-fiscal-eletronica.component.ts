import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-emissor-de-nota-fiscal-eletronica",
  templateUrl:
    "landing-sistema-emissor-de-nota-fiscal-eletronica.component.html",
  styleUrls: [
    "landing-sistema-emissor-de-nota-fiscal-eletronica.component.css",
  ],
})
export class LandingSistemaEmissorDeNotaFiscalEletronica {
  rawm74t: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle(
      "Landing-Sistema-Emissor-de-Nota-Fiscal-Eletronica - Soft Clever"
    );
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content:
          "Landing-Sistema-Emissor-de-Nota-Fiscal-Eletronica - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
