import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaNFEEmSP } from './sistema-nfe-em-sp.component';

const routes = [
    {
        path: '',
        component: SistemaNFEEmSP,
    },
];

@NgModule({
    declarations: [SistemaNFEEmSP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaNFEEmSP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaNfeEmSpModule {}
