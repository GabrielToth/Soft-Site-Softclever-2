import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaSATFiscal } from './landing-sistema-sat-fiscal.component';

const routes = [
    {
        path: '',
        component: LandingSistemaSATFiscal,
    },
];

@NgModule({
    declarations: [LandingSistemaSATFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaSATFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaSatFiscalModule {}
