import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-emissor-cupom-fiscal",
  templateUrl: "landing-emissor-cupom-fiscal.component.html",
  styleUrls: ["landing-emissor-cupom-fiscal.component.css"],
})
export class LandingEmissorCupomFiscal {
  rawsoki: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Emissor-Cupom-Fiscal - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Emissor-Cupom-Fiscal - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
