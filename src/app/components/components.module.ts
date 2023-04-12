import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { SolucoesLEFT } from './solucoes-left/solucoes-left.component'
import { Videos } from './videos/videos.component'
import { BotesWHATSCTT } from './botes-whats-ctt/botes-whats-ctt.component'
import { SolucoesRIGHT } from './solucoes-right/solucoes-right.component'
import { Footer } from './footer/footer.component'
import { Hero } from './hero/hero.component'
import { LogoIcone } from './logo-icone/logo-icone.component'
import { CampoFORMS } from './campo-forms/campo-forms.component'

@NgModule({
  declarations: [
    SolucoesLEFT,
    Videos,
    BotesWHATSCTT,
    SolucoesRIGHT,
    Footer,
    Hero,
    LogoIcone,
    CampoFORMS,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SolucoesLEFT,
    Videos,
    BotesWHATSCTT,
    SolucoesRIGHT,
    Footer,
    Hero,
    LogoIcone,
    CampoFORMS,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
