import { Component, Input } from '@angular/core'

@Component({
  selector: 'landing-fiscal-hero-section',
  templateUrl: 'landing-fiscal-hero-section.component.html',
  styleUrls: ['landing-fiscal-hero-section.component.css'],
})
export class LandingFiscalHeroSection {
  @Input()
  Title: string = 'Fiscal'
  rawcl2a: string = ' '
  constructor() {}
}
