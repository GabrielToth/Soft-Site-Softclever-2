import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaEmissorDeNotaFiscalEletronica } from './sistema-emissor-de-nota-fiscal-eletronica.component';

const routes = [
    {
        path: '',
        component: SistemaEmissorDeNotaFiscalEletronica,
    },
];

@NgModule({
    declarations: [SistemaEmissorDeNotaFiscalEletronica],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaEmissorDeNotaFiscalEletronica],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaEmissorDeNotaFiscalEletronicaModule {}
