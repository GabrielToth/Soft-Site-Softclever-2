import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaERPDeGestaoEmpresarial } from './landing-sistema-erp-de-gestao-empresarial.component';

const routes = [
    {
        path: '',
        component: LandingSistemaERPDeGestaoEmpresarial,
    },
];

@NgModule({
    declarations: [LandingSistemaERPDeGestaoEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaERPDeGestaoEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaErpDeGestaoEmpresarialModule {}
