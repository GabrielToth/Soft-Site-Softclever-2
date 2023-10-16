import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const routes = [
    {
        path: 'cupom-fiscal-eletronico',
        loadChildren: () =>
            import('./pages/landing-page/cupom-fiscal-eletronico/cupom-fiscal-eletronico.module').then(
                m => m.CupomFiscalEletronicoModule
            ),
    },
    {
        path: 'sistema-sat-fiscal',
        loadChildren: () =>
            import('./pages/landing-page/sistema-sat-fiscal/sistema-sat-fiscal.module').then(
                m => m.SistemaSatFiscalModule
            ),
    },
    {
        path: 'sistema-retaguarda-sat',
        loadChildren: () =>
            import('./pages/landing-page/sistema-retaguarda-sat/sistema-retaguarda-sat.module').then(
                m => m.SistemaRetaguardaSatModule
            ),
    },
    {
        path: 'sistema-erp-para-empresa',
        loadChildren: () =>
            import('./pages/landing-page/sistema-erp-para-empresa/sistema-erp-para-empresa.module').then(
                m => m.SistemaErpParaEmpresaModule
            ),
    },
    {
        path: 'software-de-gestao-para-industria',
        loadChildren: () =>
            import(
                './pages/landing-page/software-de-gestao-para-industria/software-de-gestao-para-industria.module'
            ).then(m => m.SoftwareDeGestaoParaIndustriaModule),
    },
    {
        path: 'solucao-industria-e-servico',
        loadChildren: () =>
            import('./pages/solucao-industria-e-servico/solucao-industria-e-servico.module').then(
                m => m.SolucaoIndustriaEServicoModule
            ),
    },
    {
        path: 'equipamento-sat',
        loadChildren: () =>
            import('./pages/landing-page/equipamento-sat/equipamento-sat.module').then(
                m => m.EquipamentoSatModule
            ),
    },
    {
        path: 'software-emissor-nfe',
        loadChildren: () =>
            import('./pages/landing-page/software-emissor-nfe/software-emissor-nfe.module').then(
                m => m.SoftwareEmissorNfeModule
            ),
    },
    {
        path: 'sistema-para-empresa',
        loadChildren: () =>
            import('./pages/landing-page/sistema-para-empresa/sistema-para-empresa.module').then(
                m => m.SistemaParaEmpresaModule
            ),
    },
    {
        path: 'solucao-fiscal',
        loadChildren: () => import('./pages/solucao-fiscal/solucao-fiscal.module').then(m => m.SolucaoFiscalModule),
    },
    {
        path: 'erp-sistema',
        loadChildren: () =>
            import('./pages/landing-page/erp-sistema/erp-sistema.module').then(m => m.ErpSistemaModule),
    },
    {
        path: 'emissor-nfe-sefaz',
        loadChildren: () =>
            import('./pages/landing-page/emissor-nfe-sefaz/emissor-nfe-sefaz.module').then(
                m => m.EmissorNfeSefazModule
            ),
    },
    {
        path: 'sat-desenvolvedor',
        loadChildren: () =>
            import('./pages/landing-page/sat-desenvolvedor/sat-desenvolvedor.module').then(
                m => m.SatDesenvolvedorModule
            ),
    },
    {
        path: 'emissor-nfe-online',
        loadChildren: () =>
            import('./pages/landing-page/emissor-nfe-online/emissor-nfe-online.module').then(
                m => m.EmissorNfeOnlineModule
            ),
    },
    {
        path: 'sat-cupom-fiscal',
        loadChildren: () =>
            import('./pages/landing-page/sat-cupom-fiscal/sat-cupom-fiscal.module').then(
                m => m.SatCupomFiscalModule
            ),
    },
    {
        path: 'software-empresarial',
        loadChildren: () =>
            import('./pages/landing-page/software-empresarial/software-empresarial.module').then(
                m => m.SoftwareEmpresarialModule
            ),
    },
    {
        path: 'sistema-de-gestao-erp',
        loadChildren: () =>
            import('./pages/landing-page/sistema-de-gestao-erp/sistema-de-gestao-erp.module').then(
                m => m.SistemaDeGestaoErpModule
            ),
    },
    {
        path: 'politica-de-privacidade',
        loadChildren: () =>
            import('./pages/politica-de-privacidade/politica-de-privacidade.module').then(
                m => m.PoliticaDePrivacidadeModule
            ),
    },
    {
        path: 'sistema-de-gestao-empresarial',
        loadChildren: () =>
            import('./pages/landing-page/sistema-de-gestao-empresarial/sistema-de-gestao-empresarial.module').then(
                m => m.SistemaDeGestaoEmpresarialModule
            ),
    },
    {
        path: 'sistema-nfe-em-sp',
        loadChildren: () =>
            import('./pages/landing-page/sistema-nfe-em-sp/sistema-nfe-em-sp.module').then(
                m => m.SistemaNfeEmSpModule
            ),
    },
    {
        path: 'sistema-para-cupom-fiscal-eletronico',
        loadChildren: () =>
            import(
                './pages/landing-page/sistema-para-cupom-fiscal-eletronico/sistema-para-cupom-fiscal-eletronico.module'
            ).then(m => m.SistemaParaCupomFiscalEletronicoModule),
    },
    {
        path: 'sistema-erp',
        loadChildren: () =>
            import('./pages/landing-page/sistema-erp/sistema-erp.module').then(m => m.SistemaErpModule),
    },
    {
        path: 'integracao-de-sistema-sat',
        loadChildren: () =>
            import('./pages/landing-page/integracao-de-sistema-sat/integracao-de-sistema-sat.module').then(
                m => m.IntegracaoDeSistemaSatModule
            ),
    },
    {
        path: 'software-sat',
        loadChildren: () =>
            import('./pages/landing-page/software-sat/software-sat.module').then(m => m.SoftwareSatModule),
    },
    {
        path: 'nota-fiscal-eletronica',
        loadChildren: () =>
            import('./pages/landing-page/nota-fiscal-eletronica/nota-fiscal-eletronica.module').then(
                m => m.NotaFiscalEletronicaModule
            ),
    },
    {
        path: 'software-de-gestao-empresarial',
        loadChildren: () =>
            import('./pages/landing-page/software-de-gestao-empresarial/software-de-gestao-empresarial.module').then(
                m => m.SoftwareDeGestaoEmpresarialModule
            ),
    },
    {
        path: 'emissor-nfe-sp',
        loadChildren: () =>
            import('./pages/landing-page/emissor-nfe-sp/emissor-nfe-sp.module').then(
                m => m.EmissorNfeSpModule
            ),
    },
    {
        path: 'sistema-emissor-de-nota-fiscal-eletronica',
        loadChildren: () =>
            import(
                './pages/landing-page/sistema-emissor-de-nota-fiscal-eletronica/sistema-emissor-de-nota-fiscal-eletronica.module'
            ).then(m => m.SistemaEmissorDeNotaFiscalEletronicaModule),
    },
    {
        path: 'software-nota-fiscal-eletronica',
        loadChildren: () =>
            import(
                './pages/landing-page/software-nota-fiscal-eletronica/software-nota-fiscal-eletronica.module'
            ).then(m => m.SoftwareNotaFiscalEletronicaModule),
    },
    {
        path: 'sistema-pdv-sat',
        loadChildren: () =>
            import('./pages/landing-page/sistema-pdv-sat/sistema-pdv-sat.module').then(
                m => m.SistemaPdvSatModule
            ),
    },
    {
        path: 'sat',
        loadChildren: () => import('./pages/landing-page/sat/sat.module').then(m => m.SatModule),
    },
    {
        path: 'sistema-nfe-sefaz-em-sp',
        loadChildren: () =>
            import('./pages/landing-page/sistema-nfe-sefaz-em-sp/sistema-nfe-sefaz-em-sp.module').then(
                m => m.SistemaNfeSefazEmSpModule
            ),
    },
    {
        path: 'solucao-varejo',
        loadChildren: () => import('./pages/solucao-varejo/solucao-varejo.module').then(m => m.SolucaoVarejoModule),
    },
    {
        path: 'sistema-de-gestao',
        loadChildren: () =>
            import('./pages/landing-page/sistema-de-gestao/sistema-de-gestao.module').then(
                m => m.SistemaDeGestaoModule
            ),
    },
    {
        path: 'emissor-cupom-fiscal',
        loadChildren: () =>
            import('./pages/landing-page/emissor-cupom-fiscal/emissor-cupom-fiscal.module').then(
                m => m.EmissorCupomFiscalModule
            ),
    },
    {
        path: 'sistema-erp-de-gestao',
        loadChildren: () =>
            import('./pages/landing-page/sistema-erp-de-gestao/sistema-erp-de-gestao.module').then(
                m => m.SistemaErpDeGestaoModule
            ),
    },
    {
        path: 'sistema-sat',
        loadChildren: () =>
            import('./pages/landing-page/sistema-sat/sistema-sat.module').then(m => m.SistemaSatModule),
    },
    {
        path: 'emissor-nfe',
        loadChildren: () =>
            import('./pages/landing-page/emissor-nfe/emissor-nfe.module').then(m => m.EmissorNfeModule),
    },
    {
        path: 'software-erp-de-gestao',
        loadChildren: () =>
            import('./pages/landing-page/software-erp-de-gestao/software-erp-de-gestao.module').then(
                m => m.SoftwareErpDeGestaoModule
            ),
    },
    {
        path: 'sat-fiscal',
        loadChildren: () =>
            import('./pages/landing-page/sat-fiscal/sat-fiscal.module').then(m => m.SatFiscalModule),
    },
    {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'sistema-sat-fiscal-gratuito',
        loadChildren: () =>
            import('./pages/landing-page/sistema-sat-fiscal-gratuito/sistema-sat-fiscal-gratuito.module').then(
                m => m.SistemaSatFiscalGratuitoModule
            ),
    },
    {
        path: 'software-sat-fiscal',
        loadChildren: () =>
            import('./pages/landing-page/software-sat-fiscal/software-sat-fiscal.module').then(
                m => m.SoftwareSatFiscalModule
            ),
    },
    {
        path: 'cupom-fiscal-sat',
        loadChildren: () =>
            import('./pages/landing-page/cupom-fiscal-sat/cupom-fiscal-sat.module').then(
                m => m.CupomFiscalSatModule
            ),
    },
    {
        path: 'software-erp-de-gestao-empresarial',
        loadChildren: () =>
            import(
                './pages/landing-page/software-erp-de-gestao-empresarial/software-erp-de-gestao-empresarial.module'
            ).then(m => m.SoftwareErpDeGestaoEmpresarialModule),
    },
    {
        path: 'erp',
        loadChildren: () => import('./pages/landing-page/erp/erp.module').then(m => m.ErpModule),
    },
    {
        path: 'emitir-nota-fiscal-eletronica',
        loadChildren: () =>
            import('./pages/landing-page/emitir-nota-fiscal-eletronica/emitir-nota-fiscal-eletronica.module').then(
                m => m.EmitirNotaFiscalEletronicaModule
            ),
    },
    {
        path: 'sistema-erp-para-varejo',
        loadChildren: () =>
            import('./pages/landing-page/sistema-erp-para-varejo/sistema-erp-para-varejo.module').then(
                m => m.SistemaErpParaVarejoModule
            ),
    },
    {
        path: 'sistema-erp-de-gestao-empresarial',
        loadChildren: () =>
            import(
                './pages/landing-page/sistema-erp-de-gestao-empresarial/sistema-erp-de-gestao-empresarial.module'
            ).then(m => m.SistemaErpDeGestaoEmpresarialModule),
    },
    {
        path: 'sistema-nfe-sefaz',
        loadChildren: () =>
            import('./pages/landing-page/sistema-nfe-sefaz/sistema-nfe-sefaz.module').then(
                m => m.SistemaNfeSefazModule
            ),
    },
    {
        path: 'software-erp',
        loadChildren: () =>
            import('./pages/landing-page/software-erp/software-erp.module').then(m => m.SoftwareErpModule),
    },
    {
        path: 'sistema-empresarial',
        loadChildren: () =>
            import('./pages/landing-page/sistema-empresarial/sistema-empresarial.module').then(
                m => m.SistemaEmpresarialModule
            ),
    },
    {
        path: 'sistema-erp-comercial',
        loadChildren: () =>
            import('./pages/landing-page/sistema-erp-comercial/sistema-erp-comercial.module').then(
                m => m.SistemaErpComercialModule
            ),
    },
    {
        path: 'emissor-nfe-sefaz-em-sp',
        loadChildren: () =>
            import('./pages/landing-page/emissor-nfe-sefaz-em-sp/emissor-nfe-sefaz-em-sp.module').then(
                m => m.EmissorNfeSefazEmSpModule
            ),
    },
    {
        path: 'solucao-atacado-e-distribuicao',
        loadChildren: () =>
            import('./pages/solucao-atacado-distribuicao/solucao-atacado-distribuicao.module').then(
                m => m.SolucaoAtacadoDistribuicaoModule
            ),
    },
    {
        path: 'software-de-gestao',
        loadChildren: () =>
            import('./pages/landing-page/software-de-gestao/software-de-gestao.module').then(
                m => m.SoftwareDeGestaoModule
            ),
    },
    {
        path: 'contato',
        loadChildren: () => import('./pages/contato/contato.module').then(m => m.ContatoModule),
    },
    {
        path: 'obrigado',
        loadChildren: () => import('./pages/obrigado/obrigado.module').then(m => m.ObrigadoModule),
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule, HttpClientModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
