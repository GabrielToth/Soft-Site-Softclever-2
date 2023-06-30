import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-software-emissor-nfe",
  templateUrl: "landing-software-emissor-nfe.component.html",
  styleUrls: ["landing-software-emissor-nfe.component.css"],
})
export class LandingSoftwareEmissorNFE {
  raw59g0: string = " ";
  raw4le8: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Software-Emissor-NFE - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Software-Emissor-NFE - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
