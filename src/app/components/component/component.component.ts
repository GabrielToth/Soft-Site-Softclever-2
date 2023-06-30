import { Component, Input } from "@angular/core";

@Component({
  selector: "app-component",
  templateUrl: "component.component.html",
  styleUrls: ["component.component.css"],
})
export class AppComponent {
  @Input()
  heading5: string = "Relatórios Gerenciais";
  @Input()
  image_src5: string =
    "https://images.unsplash.com/photo-1654263736203-a289f57c0d82?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fGludm9pY2V8ZW58MHx8fHwxNjgxNDEzMTA4&ixlib=rb-4.0.3&w=1400";
  @Input()
  text6: string =
    "Nota Fiscal de Serviços Eletrônica (NFS-e), com envio rápido e em lote para o sistema da prefeitura. Gerada a partir do pedido de venda e integrada com o financeiro. Envio automático de PDF por e-mail.";
  @Input()
  heading3: string = "Cadastros";
  @Input()
  image_src9: string =
    "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGV4Y2VsfGVufDB8fHx8MTY4MTQxMzk1NA&ixlib=rb-4.0.3&w=1400";
  @Input()
  text7: string =
    "Digitação e controle completo dos orçamentos. Permite ao usuário envio parcial dos produtos para os pedidos de vendas. Controle de saldos, curva ABC de orçamentos, opções de relatórios comparativos (Orçado x Faturado x Saldo), status Pendente e Realizado, Follow-Up e impressão de orçamentos.";
  @Input()
  image_src7: string =
    "https://images.unsplash.com/photo-1654263937085-48fb17a63d66?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGludm9pY2V8ZW58MHx8fHwxNjgxNDEzMTA4&ixlib=rb-4.0.3&w=1400";
  @Input()
  image_alt2: string = "image";
  @Input()
  image_alt7: string = "image";
  @Input()
  image_src8: string =
    "https://images.unsplash.com/photo-1649209979970-f01d950cc5ed?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGludm9pY2V8ZW58MHx8fHwxNjgxNDEzMTA4&ixlib=rb-4.0.3&w=1400";
  @Input()
  image_src3: string =
    "https://images.unsplash.com/photo-1642543348781-ed9c6d67ed20?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxidXl8ZW58MHx8fHwxNjgxNDEzNDAx&ixlib=rb-4.0.3&w=1400";
  @Input()
  image_alt9: string = "image";
  @Input()
  image_src6: string =
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&ixlib=rb-4.0.3&w=1400";
  @Input()
  text2: string =
    "Totalmente integrado com o estoque e financeiro. Permite ao usuário gerar pedidos de compras para serviços ou produtos. Também é possível importar arquivos XMLs enviado pelos fornecedores. Impressão de diversos modelos de pedidos de compra e diversas opções de filtros e relatórios.";
  @Input()
  image_alt5: string = "image";
  @Input()
  heading4: string = "Nota Fiscal de Produtos";
  @Input()
  heading6: string = "Nota Fiscal de Serviços";
  @Input()
  text1: string =
    "Integrado com as compras e vendas. Controle detalhado das contas a pagar e a receber. Diversas opções de filtros e relatórios. Opções de controle de contas contábeis, centro de custos e departamento. Controle de conciliação bancárias. Gera boleto bancário com controle de remessa e retorno junto ao banco. Integração de pagamentos bancários através do SISPAG. Permite lançamento de despesas avulsas e de contas estimadas e/ou reais. Vínculo com conta corrente e cheques. Permite projeção de novas despesas, registro de pagamentos individuais, tudo individualmente ou através de filtro, Controle de fluxo de caixa, previsões e metas orçamentárias, controle de saldo bancários com transferência em contas correntes e muito mais.";
  @Input()
  image_alt8: string = "image";
  @Input()
  image_src1: string =
    "https://images.unsplash.com/photo-1601642263169-e6159cd2320e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxidXRjaGVyfGVufDB8fHx8MTY4MTMxMjY4Mg&ixlib=rb-4.0.3&w=1400";
  @Input()
  heading8: string = "Tabelas Auxiliares";
  @Input()
  image_alt: string = "image";
  @Input()
  image_alt3: string = "image";
  @Input()
  image_src2: string =
    "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzk5NTIx&ixlib=rb-4.0.3&w=1400";
  @Input()
  image_src: string =
    "/assets/playground_assets/mulher-com-tablet-trabalhando-perto-das-prateleiras-do-armazem-com-carga-2-500w.jpg";
  @Input()
  image_alt1: string = "image";
  @Input()
  image_alt6: string = "image";
  @Input()
  text5: string =
    "Essenciais para o controle completo e gestão financeira da empresa. Permite ao usuário diversas opções de filtros e relatórios com totais de vendas detalhado por período, movimentações de vendas e saídas, movimentações do caixa com opções de resumo por forma e condição de pagamento, Curva ABC de Clientes, Produtos e Vendedores e Fornecedores e mapas de vendas.";
  @Input()
  heading: string = "Pedidos de Vendas";
  @Input()
  image_alt4: string = "image";
  @Input()
  text4: string =
    "Totalmente integrado com o estoque e financeiro, Nota Fiscal Eletrônica (NF-e) com envio e autorização junto a Secretaria da Fazenda SEFAZ. Rotinas de cancelamento e inutilização por faixa numérica, carta de correção, envio automático de e-mail com XML e PDF para o cliente, configurações de diversos tipos de operações com cálculo automático de impostos, pré-visualização e impressão do DANFE e opções de relatórios fiscais.";
  @Input()
  text8: string =
    "Essenciais para a melhor funcionalidade de cada módulo, permitem ao usuário cadastros auxiliares para emissão de Nota Fiscais, cadastro de produtos clientes e fornecedores, controle financeiro, produção e caixa, além de rotinas para a sincronização dos cadastros caso a empresa tenha mais de um banco de dados";
  @Input()
  text: string =
    "Integrado com o estoque e financeiro. Emissão de pedidos de vendas de maneira expressa ou detalhada. Diversas opções de filtros e relatórios e finalização de vendas parciais ou totais através da emissão de NF-e ou NFS-e. Geração de orçamentos e transferências, controle de entregas parciais com elaboração de romaneio de carga, geração de ordem de produção, múltiplos status, troca e devolução com geração de crédito ao cliente, reserva de produtos, controle de movimentações financeiras dos clientes, liberação e expedição de pedidos, impressão de recibo de entrega, etiquetas e pedidos e muito mais.";
  @Input()
  image_src4: string =
    "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxyZWdpc3RlcnxlbnwwfHx8fDE2ODE0MTM3ODk&ixlib=rb-4.0.3&w=1400";
  @Input()
  heading7: string = "Orçamentos";
  @Input()
  text3: string =
    "Controle completo dos cadastros de Clientes, Fornecedores, Produtos, Transportadores e Vendedores. Relatórios com dados dos cadastros que podem ser gerados a partir do filtro escolhido. Diversas opções de rotinas que facilitam os controles e cadastros.";
  @Input()
  heading1: string = "Financeiro";
  @Input()
  heading2: string = "Compras";
  constructor() {}
}
