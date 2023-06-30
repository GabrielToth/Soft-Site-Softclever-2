import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-emitir-nota-fiscal-eletronica",
  templateUrl: "landing-emitir-nota-fiscal-eletronica.component.html",
  styleUrls: ["landing-emitir-nota-fiscal-eletronica.component.css"],
})
export class LandingEmitirNotaFiscalEletronica {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Emitir-Nota-Fiscal-Eletronica - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Emitir-Nota-Fiscal-Eletronica - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
