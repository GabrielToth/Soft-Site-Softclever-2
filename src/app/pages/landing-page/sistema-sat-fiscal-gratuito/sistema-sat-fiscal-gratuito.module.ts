import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaSATFiscalGratuito } from './sistema-sat-fiscal-gratuito.component';

const routes = [
    {
        path: '',
        component: SistemaSATFiscalGratuito,
    },
];

@NgModule({
    declarations: [SistemaSATFiscalGratuito],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaSATFiscalGratuito],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaSatFiscalGratuitoModule {}
