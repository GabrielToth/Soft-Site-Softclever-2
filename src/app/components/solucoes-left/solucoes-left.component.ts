import { Component, Input } from "@angular/core";

@Component({
  selector: "solucoes-left",
  templateUrl: "solucoes-left.component.html",
  styleUrls: ["solucoes-left.component.css"],
})
export class SolucoesLEFT {
  @Input()
  image_src: string = "/assets/images/comercio-varejista-1500w.webp";
  @Input()
  button: string = "SAIBA MAIS";
  @Input()
  rootClassName: string = "";
  @Input()
  title: string = "Lorem ipsum";
  @Input()
  image_alt: string = "image";
  @Input()
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
  constructor() {}
}
