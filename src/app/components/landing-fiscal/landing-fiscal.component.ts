import { Component, Input } from "@angular/core";

@Component({
  selector: "landing-fiscal",
  templateUrl: "landing-fiscal.component.html",
  styleUrls: ["landing-fiscal.component.css"],
})
export class LandingFiscal {
  @Input()
  image_alt1: string = "image";
  @Input()
  image_src4: string =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&ixlib=rb-4.0.3&w=1400";
  @Input()
  heading: string = "Sírius NF-e";
  @Input()
  image_alt4: string = "image";
  @Input()
  image_src1: string =
    "https://images.unsplash.com/photo-1625980344922-a4df108b2bd0?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGJpbGx8ZW58MHx8fHwxNjgxMzEzMzE2&ixlib=rb-4.0.3&h=1500";
  @Input()
  image_src2: string =
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&ixlib=rb-4.0.3&h=1500";
  @Input()
  heading1: string = "Sírius CT-e";
  @Input()
  image_alt2: string = "image";
  @Input()
  image_alt: string = "image";
  @Input()
  image_src3: string =
    "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxmaW5hbmNlfGVufDB8fHx8MTY4MTM5OTUyMQ&ixlib=rb-4.0.3&w=1400";
  @Input()
  image_alt3: string = "image";
  @Input()
  text1: string =
    "Emissão de Manifestação de Documentos Fiscais com a finalidade de atender empresas prestadoras de serviço cujo transporte seja realizado em veículos próprios, arrendados, ou mediante a contratação de transportador autônomo de cargas, com mais de uma NF-e ou CT-e. A finalidade do MDF-e é agilizar o registro em lote de documentos fiscais em trânsito e identificar a unidade de carga utilizada e demais características do transporte.";
  @Input()
  heading2: string = "Sírius MDF-e";
  @Input()
  heading3: string = "Sírius Sped Fiscal e Bloco K";
  @Input()
  image_src: string = "/assets/playground_assets/fiscal-1-500w.jpg";
  @Input()
  text: string =
    "Emissão de Conhecimento de Transporte Eletrônico (CT-e) com envio e autorização junto a SEFAZ. Diversos processos automatizados. Filtros e relatórios gerenciais. Cadastros de emitente, remetente, consignatário, redespacho, tomador, expedidor, recebedor e destinatário. Pré-visualização e impressão do Conhecimento de Transporte.";
  constructor() {}
}
