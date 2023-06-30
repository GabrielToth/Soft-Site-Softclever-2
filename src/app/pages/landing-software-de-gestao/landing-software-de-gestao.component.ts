import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-software-de-gestao",
  templateUrl: "landing-software-de-gestao.component.html",
  styleUrls: ["landing-software-de-gestao.component.css"],
})
export class LandingSoftwareDeGestao {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Software-de-Gestao - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Software-de-Gestao - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
