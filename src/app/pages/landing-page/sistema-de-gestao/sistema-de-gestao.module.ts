import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaDeGestao } from './sistema-de-gestao.component';

const routes = [
    {
        path: '',
        component: SistemaDeGestao,
    },
];

@NgModule({
    declarations: [SistemaDeGestao],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaDeGestao],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaDeGestaoModule {}
