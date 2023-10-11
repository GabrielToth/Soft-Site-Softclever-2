import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaNFESefaz } from './landing-sistema-nfe-sefaz.component';

const routes = [
    {
        path: '',
        component: LandingSistemaNFESefaz,
    },
];

@NgModule({
    declarations: [LandingSistemaNFESefaz],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaNFESefaz],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaNfeSefazModule {}
