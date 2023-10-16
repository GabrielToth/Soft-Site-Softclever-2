import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaNFESefaz } from './sistema-nfe-sefaz.component';

const routes = [
    {
        path: '',
        component: SistemaNFESefaz,
    },
];

@NgModule({
    declarations: [SistemaNFESefaz],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaNFESefaz],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaNfeSefazModule {}
