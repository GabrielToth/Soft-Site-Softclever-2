import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sat",
  templateUrl: "landing-sat.component.html",
  styleUrls: ["landing-sat.component.scss"],
})
export class LandingSAT {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-SAT - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-SAT - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
