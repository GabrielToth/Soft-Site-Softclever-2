import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareDeGestao } from './software-de-gestao.component';

const routes = [
    {
        path: '',
        component: SoftwareDeGestao,
    },
];

@NgModule({
    declarations: [SoftwareDeGestao],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareDeGestao],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareDeGestaoModule {}
