import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSoftwareDeGestao } from './landing-software-de-gestao.component';

const routes = [
    {
        path: '',
        component: LandingSoftwareDeGestao,
    },
];

@NgModule({
    declarations: [LandingSoftwareDeGestao],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSoftwareDeGestao],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSoftwareDeGestaoModule {}
