import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSoftwareSATFiscal } from './landing-software-sat-fiscal.component';

const routes = [
    {
        path: '',
        component: LandingSoftwareSATFiscal,
    },
];

@NgModule({
    declarations: [LandingSoftwareSATFiscal],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSoftwareSATFiscal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareSatFiscalModule {}
