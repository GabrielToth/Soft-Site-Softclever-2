import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareERPDeGestao } from './software-erp-de-gestao.component';

const routes = [
    {
        path: '',
        component: SoftwareERPDeGestao,
    },
];

@NgModule({
    declarations: [SoftwareERPDeGestao],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareERPDeGestao],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareErpDeGestaoModule {}
