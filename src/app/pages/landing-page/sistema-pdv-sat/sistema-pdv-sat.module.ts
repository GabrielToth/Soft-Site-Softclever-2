import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaPDVSAT } from './sistema-pdv-sat.component';

const routes = [
    {
        path: '',
        component: SistemaPDVSAT,
    },
];

@NgModule({
    declarations: [SistemaPDVSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaPDVSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaPdvSatModule {}
