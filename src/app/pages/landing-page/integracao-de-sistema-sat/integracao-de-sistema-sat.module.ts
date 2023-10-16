import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { IntegracaoDeSistemaSAT } from './integracao-de-sistema-sat.component';

const routes = [
    {
        path: '',
        component: IntegracaoDeSistemaSAT,
    },
];

@NgModule({
    declarations: [IntegracaoDeSistemaSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [IntegracaoDeSistemaSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntegracaoDeSistemaSatModule {}
