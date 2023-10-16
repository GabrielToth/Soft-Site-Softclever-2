import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CupomFiscalEletronico } from './cupom-fiscal-eletronico.component';
import { ComponentsModule } from '../../../components/components.module';

const routes = [
    {
        path: '',
        component: CupomFiscalEletronico,
    },
];

@NgModule({
    declarations: [CupomFiscalEletronico],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [CupomFiscalEletronico],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CupomFiscalEletronicoModule {}
