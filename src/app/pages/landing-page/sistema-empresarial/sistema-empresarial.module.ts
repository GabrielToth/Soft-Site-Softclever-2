import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaEmpresarial } from './sistema-empresarial.component';

const routes = [
    {
        path: '',
        component: SistemaEmpresarial,
    },
];

@NgModule({
    declarations: [SistemaEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaEmpresarialModule {}
