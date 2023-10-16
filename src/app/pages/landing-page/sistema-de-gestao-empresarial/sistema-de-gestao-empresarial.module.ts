import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaDeGestaoEmpresarial } from './sistema-de-gestao-empresarial.component';

const routes = [
    {
        path: '',
        component: SistemaDeGestaoEmpresarial,
    },
];

@NgModule({
    declarations: [SistemaDeGestaoEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaDeGestaoEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaDeGestaoEmpresarialModule {}
