import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { PoliticaDePrivacidade } from './politica-de-privacidade.component';

const routes = [
    {
        path: '',
        component: PoliticaDePrivacidade,
    },
];

@NgModule({
    declarations: [PoliticaDePrivacidade],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [PoliticaDePrivacidade],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PoliticaDePrivacidadeModule {}
