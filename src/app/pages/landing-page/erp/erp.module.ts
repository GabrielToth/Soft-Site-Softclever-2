import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { ERP } from './erp.component';

const routes = [
    {
        path: '',
        component: ERP,
    },
];

@NgModule({
    declarations: [ERP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [ERP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ErpModule {}
