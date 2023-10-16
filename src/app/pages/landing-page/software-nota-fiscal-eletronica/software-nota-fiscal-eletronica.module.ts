import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareNotaFiscalEletronica } from './software-nota-fiscal-eletronica.component';

const routes = [
    {
        path: '',
        component: SoftwareNotaFiscalEletronica,
    },
];

@NgModule({
    declarations: [SoftwareNotaFiscalEletronica],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareNotaFiscalEletronica],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareNotaFiscalEletronicaModule {}
