import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareDeGestaoParaIndustria } from './software-de-gestao-para-industria.component';

const routes = [
    {
        path: '',
        component: SoftwareDeGestaoParaIndustria,
    },
];

@NgModule({
    declarations: [SoftwareDeGestaoParaIndustria],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareDeGestaoParaIndustria],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareDeGestaoParaIndustriaModule {}
