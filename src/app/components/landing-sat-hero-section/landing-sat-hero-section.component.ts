import { Component, Input } from "@angular/core";

@Component({
  selector: "landing-sat-hero-section",
  templateUrl: "landing-sat-hero-section.component.html",
  styleUrls: ["landing-sat-hero-section.component.scss"],
})
export class LandingSATHeroSection {
  @Input()
  Heading: string = "Software SAT Fiscal";
  constructor() {}
}
