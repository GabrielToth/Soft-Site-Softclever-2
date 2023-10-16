import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaParaCupomFiscalEletronico } from './sistema-para-cupom-fiscal-eletronico.component';

const routes = [
    {
        path: '',
        component: SistemaParaCupomFiscalEletronico,
    },
];

@NgModule({
    declarations: [SistemaParaCupomFiscalEletronico],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaParaCupomFiscalEletronico],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaParaCupomFiscalEletronicoModule {}
