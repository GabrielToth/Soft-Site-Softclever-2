import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-emissor-nf-online",
  templateUrl: "landing-emissor-nfe-online.component.html",
  styleUrls: ["landing-emissor-nfe-online.component.scss"],
})
export class LandingEmissorNFEOnline {
  rawq0yv: string = " ";
  raw3ayj: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Emissor-NFE-Online - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Emissor-NFE-Online - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
