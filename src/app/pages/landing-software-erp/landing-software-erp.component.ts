import { Component } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Component({
  selector: "landing-software-erp",
  templateUrl: "landing-software-erp.component.html",
  styleUrls: ["landing-software-erp.component.css"],
})
export class LandingSoftwareERP {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle("Landing-Software-ERP - Soft Clever");
    this.meta.addTags([
      {
        name: "description",
        content: "A solução para a gestão empresarial do seu negócio.",
      },
      {
        property: "og:title",
        content: "Landing-Software-ERP - Soft Clever",
      },
      {
        property: "og:description",
        content: "A solução ideal para a gestão empresarial do seu negócio.",
      },
    ]);
  }
}
