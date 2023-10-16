import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaERP } from './sistema-erp.component';

const routes = [
    {
        path: '',
        component: SistemaERP,
    },
];

@NgModule({
    declarations: [SistemaERP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaERP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaErpModule {}
