import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Videos } from './videos/videos.component';
import { BotesWHATSCTT } from './botes-whats-ctt/botes-whats-ctt.component';
import { LandingSATConteudo } from './landing-sat-conteudo/landing-sat-conteudo.component';
import { Footer } from './footer/footer.component';
import { LandingAtacadoConteudo } from './landing-atacado-conteudo/landing-atacado-conteudo.component';
import { HeroSection } from './hero-section/hero-section.component';
import { HomeServicos } from './home-servicos/home-servicos.component';
import { LandingFiscal } from './landing-fiscal/landing-fiscal.component';
import { Menu } from './menu/menu.component';
import { SolutionCardComponent } from './solution-card/solution-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentSectionComponent } from './content-section/content-section.component';

@NgModule({
    declarations: [
        Videos,
        BotesWHATSCTT,
        LandingSATConteudo,
        Footer,
        LandingAtacadoConteudo,
        HeroSection,
        HomeServicos,
        LandingFiscal,
        Menu,
        SolutionCardComponent,
        ContactFormComponent,
        ContentSectionComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [
        Videos,
        BotesWHATSCTT,
        LandingSATConteudo,
        Footer,
        LandingAtacadoConteudo,
        HeroSection,
        HomeServicos,
        LandingFiscal,
        Menu,
        SolutionCardComponent,
        ContactFormComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
