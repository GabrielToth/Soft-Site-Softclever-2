import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaParaEmpresa } from './landing-sistema-para-empresa.component';

const routes = [
    {
        path: '',
        component: LandingSistemaParaEmpresa,
    },
];

@NgModule({
    declarations: [LandingSistemaParaEmpresa],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaParaEmpresa],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaParaEmpresaModule {}
