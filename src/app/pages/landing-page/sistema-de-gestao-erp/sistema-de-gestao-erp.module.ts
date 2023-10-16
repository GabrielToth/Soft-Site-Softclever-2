import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaDeGestaoERP } from './sistema-de-gestao-erp.component';

const routes = [
    {
        path: '',
        component: SistemaDeGestaoERP,
    },
];

@NgModule({
    declarations: [SistemaDeGestaoERP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaDeGestaoERP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaDeGestaoErpModule {}
