import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-sa-fiscal-gratuito",
  templateUrl: "landing-sistema-sat-fiscal-gratuito.component.html",
  styleUrls: ["landing-sistema-sat-fiscal-gratuito.component.css"],
})
export class LandingSistemaSATFiscalGratuito {
  rawhg7f: string = " ";
  raw7ge8: string = " ";
  rawtb1f: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Sistema-SAT-Fiscal-Gratuito - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Sistema-SAT-Fiscal-Gratuito - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
