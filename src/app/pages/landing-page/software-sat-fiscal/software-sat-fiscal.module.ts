import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareSATFiscal } from './software-sat-fiscal.component';

const routes = [
    {
        path: '',
        component: SoftwareSATFiscal,
    },
];

@NgModule({
    declarations: [SoftwareSATFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareSATFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareSatFiscalModule {}
