import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { ERPSistema } from './erp-sistema.component';

const routes = [
    {
        path: '',
        component: ERPSistema,
    },
];

@NgModule({
    declarations: [ERPSistema],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [ERPSistema],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErpSistemaModule {}
