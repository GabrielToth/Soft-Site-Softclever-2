import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { CupomFiscalSAT } from './cupom-fiscal-sat.component';

const routes = [
    {
        path: '',
        component: CupomFiscalSAT,
    },
];

@NgModule({
    declarations: [CupomFiscalSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [CupomFiscalSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CupomFiscalSatModule {}
