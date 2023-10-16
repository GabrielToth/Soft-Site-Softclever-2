import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareEmpresarial } from './software-empresarial.component';

const routes = [
    {
        path: '',
        component: SoftwareEmpresarial,
    },
];

@NgModule({
    declarations: [SoftwareEmpresarial],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareEmpresarial],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareEmpresarialModule {}
