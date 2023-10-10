import { Component, Input } from "@angular/core";

@Component({
  selector: "landing-atacado-conteudo",
  templateUrl: "landing-atacado-conteudo.component.html",
  styleUrls: ["landing-atacado-conteudo.component.scss"],
})
export class LandingAtacadoConteudo {
  @Input()
  image_src1: string =
    "https://images.unsplash.com/photo-1601642263169-e6159cd2320e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxidXRjaGVyfGVufDB8fHx8MTY4MTMxMjY4Mg&ixlib=rb-4.0.3&w=1400";
}
