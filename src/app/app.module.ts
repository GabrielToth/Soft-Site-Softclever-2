import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component'

const routes = [
  {
    path: 'solucao-industria--servico',
    loadChildren: () =>
      import(
        './pages/solucao-industria--servico/solucao-industria--servico.module'
      ).then((m) => m.SolucaoIndustriaServicoModule),
  },
  {
    path: 'solucao-fiscal',
    loadChildren: () =>
      import('./pages/solucao-fiscal/solucao-fiscal.module').then(
        (m) => m.SolucaoFiscalModule
      ),
  },
  {
    path: 'solucao-varejo',
    loadChildren: () =>
      import('./pages/solucao-varejo/solucao-varejo.module').then(
        (m) => m.SolucaoVarejoModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'solucao-atacado--distribuicao',
    loadChildren: () =>
      import(
        './pages/solucao-atacado--distribuicao/solucao-atacado--distribuicao.module'
      ).then((m) => m.SolucaoAtacadoDistribuicaoModule),
  },
  {
    path: 'contato',
    loadChildren: () =>
      import('./pages/contato/contato.module').then((m) => m.ContatoModule),
  },
  {
    path: 'politica-de-privacidade',
    loadChildren: () =>
      import(
        './pages/politica-de-privacidade/politica-de-privacidade.module'
      ).then((m) => m.PoliticaDePrivacidadeModule),
  },
]

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
