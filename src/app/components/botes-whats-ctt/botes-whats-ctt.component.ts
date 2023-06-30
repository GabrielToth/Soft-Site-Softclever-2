import { Component, Input } from "@angular/core";

@Component({
  selector: "botes-whatsctt",
  templateUrl: "botes-whats-ctt.component.html",
  styleUrls: ["botes-whats-ctt.component.css"],
})
export class BotesWHATSCTT {
  @Input()
  rootClassName: string = "";
  constructor() {}
}
