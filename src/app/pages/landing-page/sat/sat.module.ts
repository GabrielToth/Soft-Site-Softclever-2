import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SAT } from './sat.component';

const routes = [
    {
        path: '',
        component: SAT,
    },
];

@NgModule({
    declarations: [SAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SatModule {}
