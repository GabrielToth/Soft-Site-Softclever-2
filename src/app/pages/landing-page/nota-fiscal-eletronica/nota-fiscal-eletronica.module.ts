import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { NotaFiscalEletronica } from './nota-fiscal-eletronica.component';

const routes = [
    {
        path: '',
        component: NotaFiscalEletronica,
    },
];

@NgModule({
    declarations: [NotaFiscalEletronica],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [NotaFiscalEletronica],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NotaFiscalEletronicaModule {}
