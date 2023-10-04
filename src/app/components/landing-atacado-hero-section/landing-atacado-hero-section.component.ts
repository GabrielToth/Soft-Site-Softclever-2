import { Component, Input } from "@angular/core";

@Component({
  selector: "landing-atacado-hero-section",
  templateUrl: "landing-atacado-hero-section.component.html",
  styleUrls: ["landing-atacado-hero-section.component.scss"],
})
export class LandingAtacadoHeroSection {
  @Input()
  titulo: string = "Atacado e Distribuição";
  constructor() {}
}
