import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-de-gestao-empresarial",
  templateUrl: "landing-sistema-de-gestao-empresarial.component.html",
  styleUrls: ["landing-sistema-de-gestao-empresarial.component.scss"],
})
export class LandingSistemaDeGestaoEmpresarial {
  raweuvg: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Sistema-de-Gestao-Empresarial - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Sistema-de-Gestao-Empresarial - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
