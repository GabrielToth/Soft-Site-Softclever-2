import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaERPComercial } from './sistema-erp-comercial.component';

const routes = [
    {
        path: '',
        component: SistemaERPComercial,
    },
];

@NgModule({
    declarations: [SistemaERPComercial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaERPComercial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaErpComercialModule {}
