import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmitirNotaFiscalEletronica } from './emitir-nota-fiscal-eletronica.component';

const routes = [
    {
        path: '',
        component: EmitirNotaFiscalEletronica,
    },
];

@NgModule({
    declarations: [EmitirNotaFiscalEletronica],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmitirNotaFiscalEletronica],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmitirNotaFiscalEletronicaModule {}
