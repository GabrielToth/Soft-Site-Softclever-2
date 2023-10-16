import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaERPDeGestaoEmpresarial } from './sistema-erp-de-gestao-empresarial.component';

const routes = [
    {
        path: '',
        component: SistemaERPDeGestaoEmpresarial,
    },
];

@NgModule({
    declarations: [SistemaERPDeGestaoEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaERPDeGestaoEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaErpDeGestaoEmpresarialModule {}
