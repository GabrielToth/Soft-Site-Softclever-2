import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaERPParaEmpresa } from './sistema-erp-para-empresa.component';

const routes = [
    {
        path: '',
        component: SistemaERPParaEmpresa,
    },
];

@NgModule({
    declarations: [SistemaERPParaEmpresa],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaERPParaEmpresa],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaErpParaEmpresaModule {}
