import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaRetaguardaSAT } from './sistema-retaguarda-sat.component';

const routes = [
    {
        path: '',
        component: SistemaRetaguardaSAT,
    },
];

@NgModule({
    declarations: [SistemaRetaguardaSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaRetaguardaSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaRetaguardaSatModule {}
