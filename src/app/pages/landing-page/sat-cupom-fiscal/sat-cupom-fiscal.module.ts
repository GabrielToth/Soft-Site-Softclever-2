import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SATCupomFiscal } from './sat-cupom-fiscal.component';

const routes = [
    {
        path: '',
        component: SATCupomFiscal,
    },
];

@NgModule({
    declarations: [SATCupomFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SATCupomFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SatCupomFiscalModule {}
