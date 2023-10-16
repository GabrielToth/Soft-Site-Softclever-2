import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareERP } from './software-erp.component';

const routes = [
    {
        path: '',
        component: SoftwareERP,
    },
];

@NgModule({
    declarations: [SoftwareERP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareERP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareErpModule {}
