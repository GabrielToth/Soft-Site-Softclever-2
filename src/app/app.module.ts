import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";

import { ComponentsModule } from "./components/components.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

const routes = [
  {
    path: "cupom-fiscal-eletronico",
    loadChildren: () =>
      import(
        "./pages/landing-cupom-fiscal-eletronico/landing-cupom-fiscal-eletronico.module"
      ).then((m) => m.LandingCupomFiscalEletronicoModule),
  },
  {
    path: "sistema-sat-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-sat-fiscal/landing-sistema-sat-fiscal.module"
      ).then((m) => m.LandingSistemaSatFiscalModule),
  },
  {
    path: "sistema-retaguarda-sat",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-retaguarda-sat/landing-sistema-retaguarda-sat.module"
      ).then((m) => m.LandingSistemaRetaguardaSatModule),
  },
  {
    path: "sistema-erp-para-empresa",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-erp-para-empresa/landing-sistema-erp-para-empresa.module"
      ).then((m) => m.LandingSistemaErpParaEmpresaModule),
  },
  {
    path: "software-de-gestao-para-industria",
    loadChildren: () =>
      import(
        "./pages/landing-software-de-gestao-para-industria/landing-software-de-gestao-para-industria.module"
      ).then((m) => m.LandingSoftwareDeGestaoParaIndustriaModule),
  },
  {
    path: "solucao-industria-e-servico",
    loadChildren: () =>
      import(
        "./pages/solucao-industria-e-servico/solucao-industria-e-servico.module"
      ).then((m) => m.SolucaoIndustriaEServicoModule),
  },
  {
    path: "equipamento-sat",
    loadChildren: () =>
      import(
        "./pages/landing-equipamento-sat/landing-equipamento-sat.module"
      ).then((m) => m.LandingEquipamentoSatModule),
  },
  {
    path: "software-emissor-nfe",
    loadChildren: () =>
      import(
        "./pages/landing-software-emissor-nfe/landing-software-emissor-nfe.module"
      ).then((m) => m.LandingSoftwareEmissorNfeModule),
  },
  {
    path: "sistema-para-empresa",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-para-empresa/landing-sistema-para-empresa.module"
      ).then((m) => m.LandingSistemaParaEmpresaModule),
  },
  {
    path: "solucao-fiscal",
    loadChildren: () =>
      import("./pages/solucao-fiscal/solucao-fiscal.module").then(
        (m) => m.SolucaoFiscalModule
      ),
  },
  {
    path: "erp-sistema",
    loadChildren: () =>
      import("./pages/landing-erp-sistema/landing-erp-sistema.module").then(
        (m) => m.LandingErpSistemaModule
      ),
  },
  {
    path: "emissor-nfe-sefaz",
    loadChildren: () =>
      import(
        "./pages/landing-emissor-nfe-sefaz/landing-emissor-nfe-sefaz.module"
      ).then((m) => m.LandingEmissorNfeSefazModule),
  },
  {
    path: "sat-desenvolvedor",
    loadChildren: () =>
      import(
        "./pages/landing-sat-desenvolvedor/landing-sat-desenvolvedor.module"
      ).then((m) => m.LandingSatDesenvolvedorModule),
  },
  {
    path: "emissor-nfe-online",
    loadChildren: () =>
      import(
        "./pages/landing-emissor-nfe-online/landing-emissor-nfe-online.module"
      ).then((m) => m.LandingEmissorNfeOnlineModule),
  },
  {
    path: "sat-cupom-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-sat-cupom-fiscal/landing-sat-cupom-fiscal.module"
      ).then((m) => m.LandingSatCupomFiscalModule),
  },
  {
    path: "software-empresarial",
    loadChildren: () =>
      import(
        "./pages/landing-software-empresarial/landing-software-empresarial.module"
      ).then((m) => m.LandingSoftwareEmpresarialModule),
  },
  {
    path: "sistema-de-gestao-erp",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-de-gestao-erp/landing-sistema-de-gestao-erp.module"
      ).then((m) => m.LandingSistemaDeGestaoErpModule),
  },
  {
    path: "politica-de-privacidade",
    loadChildren: () =>
      import(
        "./pages/politica-de-privacidade/politica-de-privacidade.module"
      ).then((m) => m.PoliticaDePrivacidadeModule),
  },
  {
    path: "sistema-de-gestao-empresarial",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-de-gestao-empresarial/landing-sistema-de-gestao-empresarial.module"
      ).then((m) => m.LandingSistemaDeGestaoEmpresarialModule),
  },
  {
    path: "sistema-nfe-em-sp",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-nfe-em-sp/landing-sistema-nfe-em-sp.module"
      ).then((m) => m.LandingSistemaNfeEmSpModule),
  },
  {
    path: "sistema-para-cupom-fiscal-eletronico",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-para-cupom-fiscal-eletronico/landing-sistema-para-cupom-fiscal-eletronico.module"
      ).then((m) => m.LandingSistemaParaCupomFiscalEletronicoModule),
  },
  {
    path: "sistema-erp",
    loadChildren: () =>
      import("./pages/landing-sistema-erp/landing-sistema-erp.module").then(
        (m) => m.LandingSistemaErpModule
      ),
  },
  {
    path: "integracao-de-sistema-sat",
    loadChildren: () =>
      import(
        "./pages/landing-integracao-de-sistema-sat/landing-integracao-de-sistema-sat.module"
      ).then((m) => m.LandingIntegracaoDeSistemaSatModule),
  },
  {
    path: "software-sat",
    loadChildren: () =>
      import("./pages/landing-software-sat/landing-software-sat.module").then(
        (m) => m.LandingSoftwareSatModule
      ),
  },
  {
    path: "nota-fiscal-eletronica",
    loadChildren: () =>
      import(
        "./pages/landing-nota-fiscal-eletronica/landing-nota-fiscal-eletronica.module"
      ).then((m) => m.LandingNotaFiscalEletronicaModule),
  },
  {
    path: "software-de-gestao-empresarial",
    loadChildren: () =>
      import(
        "./pages/landing-software-de-gestao-empresarial/landing-software-de-gestao-empresarial.module"
      ).then((m) => m.LandingSoftwareDeGestaoEmpresarialModule),
  },
  {
    path: "emissor-nfe-sp",
    loadChildren: () =>
      import(
        "./pages/landing-emissor-nfe-sp/landing-emissor-nfe-sp.module"
      ).then((m) => m.LandingEmissorNfeSpModule),
  },
  {
    path: "sistema-emissor-de-nota-fiscal-eletronica",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-emissor-de-nota-fiscal-eletronica/landing-sistema-emissor-de-nota-fiscal-eletronica.module"
      ).then((m) => m.LandingSistemaEmissorDeNotaFiscalEletronicaModule),
  },
  {
    path: "software-nota-fiscal-eletronica",
    loadChildren: () =>
      import(
        "./pages/landing-software-nota-fiscal-eletronica/landing-software-nota-fiscal-eletronica.module"
      ).then((m) => m.LandingSoftwareNotaFiscalEletronicaModule),
  },
  {
    path: "sistema-pdv-sat",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-pdv-sat/landing-sistema-pdv-sat.module"
      ).then((m) => m.LandingSistemaPdvSatModule),
  },
  {
    path: "sat",
    loadChildren: () =>
      import("./pages/landing-sat/landing-sat.module").then(
        (m) => m.LandingSatModule
      ),
  },
  {
    path: "sistema-nfe-sefaz-em-sp",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-nfe-sefaz-em-sp/landing-sistema-nfe-sefaz-em-sp.module"
      ).then((m) => m.LandingSistemaNfeSefazEmSpModule),
  },
  {
    path: "solucao-varejo",
    loadChildren: () =>
      import("./pages/solucao-varejo/solucao-varejo.module").then(
        (m) => m.SolucaoVarejoModule
      ),
  },
  {
    path: "sistema-de-gestao",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-de-gestao/landing-sistema-de-gestao.module"
      ).then((m) => m.LandingSistemaDeGestaoModule),
  },
  {
    path: "emissor-cupom-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-emissor-cupom-fiscal/landing-emissor-cupom-fiscal.module"
      ).then((m) => m.LandingEmissorCupomFiscalModule),
  },
  {
    path: "sistema-erp-de-gestao",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-erp-de-gestao/landing-sistema-erp-de-gestao.module"
      ).then((m) => m.LandingSistemaErpDeGestaoModule),
  },
  {
    path: "sistema-sat",
    loadChildren: () =>
      import("./pages/landing-sistema-sat/landing-sistema-sat.module").then(
        (m) => m.LandingSistemaSatModule
      ),
  },
  {
    path: "emissor-nfe",
    loadChildren: () =>
      import("./pages/landing-emissor-nfe/landing-emissor-nfe.module").then(
        (m) => m.LandingEmissorNfeModule
      ),
  },
  {
    path: "software-erp-de-gestao",
    loadChildren: () =>
      import(
        "./pages/landing-software-erp-de-gestao/landing-software-erp-de-gestao.module"
      ).then((m) => m.LandingSoftwareErpDeGestaoModule),
  },
  {
    path: "sat-fiscal",
    loadChildren: () =>
      import("./pages/landing-sat-fiscal/landing-sat-fiscal.module").then(
        (m) => m.LandingSatFiscalModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "sistema-sat-fiscal-gratuito",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-sat-fiscal-gratuito/landing-sistema-sat-fiscal-gratuito.module"
      ).then((m) => m.LandingSistemaSatFiscalGratuitoModule),
  },
  {
    path: "software-sat-fiscal",
    loadChildren: () =>
      import(
        "./pages/landing-software-sat-fiscal/landing-software-sat-fiscal.module"
      ).then((m) => m.LandingSoftwareSatFiscalModule),
  },
  {
    path: "cupom-fiscal-sat",
    loadChildren: () =>
      import(
        "./pages/landing-cupom-fiscal-sat/landing-cupom-fiscal-sat.module"
      ).then((m) => m.LandingCupomFiscalSatModule),
  },
  {
    path: "software-erp-de-gestao-empresarial",
    loadChildren: () =>
      import(
        "./pages/landing-software-erp-de-gestao-empresarial/landing-software-erp-de-gestao-empresarial.module"
      ).then((m) => m.LandingSoftwareErpDeGestaoEmpresarialModule),
  },
  {
    path: "erp",
    loadChildren: () =>
      import("./pages/landing-erp/landing-erp.module").then(
        (m) => m.LandingErpModule
      ),
  },
  {
    path: "emitir-nota-fiscal-eletronica",
    loadChildren: () =>
      import(
        "./pages/landing-emitir-nota-fiscal-eletronica/landing-emitir-nota-fiscal-eletronica.module"
      ).then((m) => m.LandingEmitirNotaFiscalEletronicaModule),
  },
  {
    path: "sistema-erp-para-varejo",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-erp-para-varejo/landing-sistema-erp-para-varejo.module"
      ).then((m) => m.LandingSistemaErpParaVarejoModule),
  },
  {
    path: "sistema-erp-de-gestao-empresarial",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-erp-de-gestao-empresarial/landing-sistema-erp-de-gestao-empresarial.module"
      ).then((m) => m.LandingSistemaErpDeGestaoEmpresarialModule),
  },
  {
    path: "sistema-nfe-sefaz",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-nfe-sefaz/landing-sistema-nfe-sefaz.module"
      ).then((m) => m.LandingSistemaNfeSefazModule),
  },
  {
    path: "software-erp",
    loadChildren: () =>
      import("./pages/landing-software-erp/landing-software-erp.module").then(
        (m) => m.LandingSoftwareErpModule
      ),
  },
  {
    path: "sistema-empresarial",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-empresarial/landing-sistema-empresarial.module"
      ).then((m) => m.LandingSistemaEmpresarialModule),
  },
  {
    path: "sistema-erp-comercial",
    loadChildren: () =>
      import(
        "./pages/landing-sistema-erp-comercial/landing-sistema-erp-comercial.module"
      ).then((m) => m.LandingSistemaErpComercialModule),
  },
  {
    path: "emissor-nfe-sefaz-em-sp",
    loadChildren: () =>
      import(
        "./pages/landing-emissor-nfe-sefaz-em-sp/landing-emissor-nfe-sefaz-em-sp.module"
      ).then((m) => m.LandingEmissorNfeSefazEmSpModule),
  },
  {
    path: "solucao-atacado-e-distribuicao",
    loadChildren: () =>
      import(
        "./pages/solucao-atacado--distribuicao/solucao-atacado-distribuicao.module"
      ).then((m) => m.SolucaoAtacadoDistribuicaoModule),
  },
  {
    path: "software-de-gestao",
    loadChildren: () =>
      import(
        "./pages/landing-software-de-gestao/landing-software-de-gestao.module"
      ).then((m) => m.LandingSoftwareDeGestaoModule),
  },
  {
    path: "contato",
    loadChildren: () =>
      import("./pages/contato/contato.module").then((m) => m.ContatoModule),
  },
  {
    path: "obrigado",
    loadChildren: () =>
      import("./pages/obrigado/obrigado.module").then((m) => m.ObrigadoModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ComponentsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
