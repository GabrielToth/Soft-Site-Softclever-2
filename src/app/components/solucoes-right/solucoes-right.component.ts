import { Component, Input } from "@angular/core";

@Component({
  selector: "solucoes-right",
  templateUrl: "solucoes-right.component.html",
  styleUrls: ["solucoes-right.component.scss"],
})
export class SolucoesRIGHT {
  @Input()
  image_alt: string = "image";
  @Input()
  title: string = "Lorem ipsum";
  @Input()
  description: string = "Lorem ipsum dolor sit amet, consectetur adipiscing.";
  @Input()
  button: string = "SAIBA MAIS";
  @Input()
  image_src: string = "/assets/images/comercio-varejista-1500w.webp";
  @Input()
  rootClassName: string = "";
  constructor() {}
}
