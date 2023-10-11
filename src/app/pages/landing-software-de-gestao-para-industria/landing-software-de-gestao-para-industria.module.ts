import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSoftwareDeGestaoParaIndustria } from './landing-software-de-gestao-para-industria.component';

const routes = [
    {
        path: '',
        component: LandingSoftwareDeGestaoParaIndustria,
    },
];

@NgModule({
    declarations: [LandingSoftwareDeGestaoParaIndustria],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSoftwareDeGestaoParaIndustria],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareDeGestaoParaIndustriaModule {}
