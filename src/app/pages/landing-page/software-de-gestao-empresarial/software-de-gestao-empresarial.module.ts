import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareDeGestaoEmpresarial } from './software-de-gestao-empresarial.component';

const routes = [
    {
        path: '',
        component: SoftwareDeGestaoEmpresarial,
    },
];

@NgModule({
    declarations: [SoftwareDeGestaoEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareDeGestaoEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareDeGestaoEmpresarialModule {}
