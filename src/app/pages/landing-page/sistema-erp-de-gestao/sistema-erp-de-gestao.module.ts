import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaERPDeGestao } from './sistema-erp-de-gestao.component';

const routes = [
    {
        path: '',
        component: SistemaERPDeGestao,
    },
];

@NgModule({
    declarations: [SistemaERPDeGestao],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaERPDeGestao],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaErpDeGestaoModule {}
