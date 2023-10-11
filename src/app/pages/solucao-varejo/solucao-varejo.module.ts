import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { SolucaoVarejo } from './solucao-varejo.component';

const routes = [
    {
        path: '',
        component: SolucaoVarejo,
    },
];

@NgModule({
    declarations: [SolucaoVarejo],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SolucaoVarejo],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SolucaoVarejoModule {}
