import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaERPParaVarejo } from './sistema-erp-para-varejo.component';

const routes = [
    {
        path: '',
        component: SistemaERPParaVarejo,
    },
];

@NgModule({
    declarations: [SistemaERPParaVarejo],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaERPParaVarejo],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaErpParaVarejoModule {}
