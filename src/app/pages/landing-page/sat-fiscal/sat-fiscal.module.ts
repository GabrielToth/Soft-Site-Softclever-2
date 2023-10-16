import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SATFiscal } from './sat-fiscal.component';

const routes = [
    {
        path: '',
        component: SATFiscal,
    },
];

@NgModule({
    declarations: [SATFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SATFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SatFiscalModule {}
