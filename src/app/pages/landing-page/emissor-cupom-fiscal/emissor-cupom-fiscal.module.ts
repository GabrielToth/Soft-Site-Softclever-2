import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmissorCupomFiscal } from './emissor-cupom-fiscal.component';

const routes = [
    {
        path: '',
        component: EmissorCupomFiscal,
    },
];

@NgModule({
    declarations: [EmissorCupomFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmissorCupomFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmissorCupomFiscalModule {}
