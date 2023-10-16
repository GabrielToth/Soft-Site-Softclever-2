import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaSAT } from './sistema-sat.component';

const routes = [
    {
        path: '',
        component: SistemaSAT,
    },
];

@NgModule({
    declarations: [SistemaSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaSatModule {}
