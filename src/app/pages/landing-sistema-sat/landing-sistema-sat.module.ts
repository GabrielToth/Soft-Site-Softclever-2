import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaSAT } from './landing-sistema-sat.component';

const routes = [
    {
        path: '',
        component: LandingSistemaSAT,
    },
];

@NgModule({
    declarations: [LandingSistemaSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaSatModule {}
