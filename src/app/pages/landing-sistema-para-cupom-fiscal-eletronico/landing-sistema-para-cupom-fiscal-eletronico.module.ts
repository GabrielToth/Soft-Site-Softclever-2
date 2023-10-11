import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaParaCupomFiscalEletronico } from './landing-sistema-para-cupom-fiscal-eletronico.component';

const routes = [
    {
        path: '',
        component: LandingSistemaParaCupomFiscalEletronico,
    },
];

@NgModule({
    declarations: [LandingSistemaParaCupomFiscalEletronico],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaParaCupomFiscalEletronico],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaParaCupomFiscalEletronicoModule {}
