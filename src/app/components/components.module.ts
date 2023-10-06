import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LandingAtacadoHeroSection } from "./landing-atacado-hero-section/landing-atacado-hero-section.component";
import { Videos } from "./videos/videos.component";
import { BotesWHATSCTT } from "./botes-whats-ctt/botes-whats-ctt.component";
import { LandingSATConteudo } from "./landing-sat-conteudo/landing-sat-conteudo.component";
import { LandingFiscalServicos } from "./landing-fiscal-servicos/landing-fiscal-servicos.component";
import { LandingSATServicos } from "./landing-sat-servicos/landing-sat-servicos.component";
import { LandingAtacadoServicos } from "./landing-atacado-servicos/landing-atacado-servicos.component";
import { Footer } from "./footer/footer.component";
import { LandingServicoServicos } from "./landing-servico-servicos/landing-servico-servicos.component";
import { LandingFiscalHeroSection } from "./landing-fiscal-hero-section/landing-fiscal-hero-section.component";
import { LandingAtacadoConteudo } from "./landing-atacado-conteudo/landing-atacado-conteudo.component";
import { LandingSATHeroSection } from "./landing-sat-hero-section/landing-sat-hero-section.component";
import { HomeServicos } from "./home-servicos/home-servicos.component";
import { LandingFiscal } from "./landing-fiscal/landing-fiscal.component";
import { Menu } from "./menu/menu.component";
import { SolutionCardComponent } from "./solution-card/solution-card.component";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        LandingAtacadoHeroSection,
        Videos,
        BotesWHATSCTT,
        LandingSATConteudo,
        LandingFiscalServicos,
        LandingSATServicos,
        LandingAtacadoServicos,
        Footer,
        LandingServicoServicos,
        LandingFiscalHeroSection,
        LandingAtacadoConteudo,
        LandingSATHeroSection,
        HomeServicos,
        LandingFiscal,
        Menu,
        SolutionCardComponent,
        ContactFormComponent
    ],
    imports: [CommonModule, ReactiveFormsModule, RouterModule],
    exports: [
        LandingAtacadoHeroSection,
        Videos,
        BotesWHATSCTT,
        LandingSATConteudo,
        LandingFiscalServicos,
        LandingSATServicos,
        LandingAtacadoServicos,
        Footer,
        LandingServicoServicos,
        LandingFiscalHeroSection,
        LandingAtacadoConteudo,
        LandingSATHeroSection,
        HomeServicos,
        LandingFiscal,
        Menu,
        SolutionCardComponent,
        ContactFormComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
