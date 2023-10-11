import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaEmissorDeNotaFiscalEletronica } from './landing-sistema-emissor-de-nota-fiscal-eletronica.component';

const routes = [
    {
        path: '',
        component: LandingSistemaEmissorDeNotaFiscalEletronica,
    },
];

@NgModule({
    declarations: [LandingSistemaEmissorDeNotaFiscalEletronica],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaEmissorDeNotaFiscalEletronica],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaEmissorDeNotaFiscalEletronicaModule {}
