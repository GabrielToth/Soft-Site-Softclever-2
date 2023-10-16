import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaSATFiscal } from './sistema-sat-fiscal.component';

const routes = [
    {
        path: '',
        component: SistemaSATFiscal,
    },
];

@NgModule({
    declarations: [SistemaSATFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaSATFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaSatFiscalModule {}
