import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-software-sat",
  templateUrl: "landing-software-sat.component.html",
  styleUrls: ["landing-software-sat.component.css"],
})
export class LandingSoftwareSAT {
  rawpuu0: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Software-SAT - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Software-SAT - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
