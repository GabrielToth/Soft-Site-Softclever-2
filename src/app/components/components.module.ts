import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Videos } from './videos/videos.component';
import { BotesWHATSCTT } from './botes-whats-ctt/botes-whats-ctt.component';
import { Footer } from './footer/footer.component';
import { HeroSection } from './hero-section/hero-section.component';
import { HomeServicos } from './home-servicos/home-servicos.component';
import { Menu } from './menu/menu.component';
import { SolutionCardComponent } from './solution-card/solution-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentSectionsModule } from './content-sections/content-sections.module';
import { ContentSections } from './content-sections/content-sections.component';

@NgModule({
    declarations: [
        Videos,
        BotesWHATSCTT,
        Footer,
        HeroSection,
        HomeServicos,
        Menu,
        SolutionCardComponent,
        ContactFormComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, ContentSectionsModule ,RouterModule],
    exports: [
        Videos,
        BotesWHATSCTT,
        Footer,
        HeroSection,
        HomeServicos,
        Menu,
        SolutionCardComponent,
        ContactFormComponent,
        ContentSections
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
