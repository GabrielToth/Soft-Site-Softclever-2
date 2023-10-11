import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSATFiscal } from './landing-sat-fiscal.component';

const routes = [
    {
        path: '',
        component: LandingSATFiscal,
    },
];

@NgModule({
    declarations: [LandingSATFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSATFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSatFiscalModule {}
