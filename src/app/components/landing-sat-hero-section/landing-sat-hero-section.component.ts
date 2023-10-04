import { Component, Input } from "@angular/core";

@Component({
  selector: "landing-sa-hero-section",
  templateUrl: "landing-sat-hero-section.component.html",
  styleUrls: ["landing-sat-hero-section.component.scss"],
})
export class LandingSATHeroSection {
  @Input()
  rootClassName: string = "";
  @Input()
  Heading: string = "Software SAT Fiscal";
  constructor() {}
}
