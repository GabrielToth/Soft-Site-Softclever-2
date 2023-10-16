import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareERPDeGestaoEmpresarial } from './software-erp-de-gestao-empresarial.component';

const routes = [
    {
        path: '',
        component: SoftwareERPDeGestaoEmpresarial,
    },
];

@NgModule({
    declarations: [SoftwareERPDeGestaoEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareERPDeGestaoEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareErpDeGestaoEmpresarialModule {}
