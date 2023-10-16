import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SATDesenvolvedor } from './sat-desenvolvedor.component';

const routes = [
    {
        path: '',
        component: SATDesenvolvedor,
    },
];

@NgModule({
    declarations: [SATDesenvolvedor],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SATDesenvolvedor],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SatDesenvolvedorModule {}
