import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-empresarial",
  templateUrl: "landing-sistema-empresarial.component.html",
  styleUrls: ["landing-sistema-empresarial.component.css"],
})
export class LandingSistemaEmpresarial {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Sistema-Empresarial - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Sistema-Empresarial - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
