import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-sistema-sat",
  templateUrl: "landing-sistema-sat.component.html",
  styleUrls: ["landing-sistema-sat.component.scss"],
})
export class LandingSistemaSAT {
  raw4l14: string = " ";
  rawesn2: string = " ";
  rawn20o: string = " ";
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Sistema-SAT - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Sistema-SAT - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
