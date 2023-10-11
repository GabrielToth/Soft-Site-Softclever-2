import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../components/components.module';
import { LandingSistemaNFEEmSP } from './landing-sistema-nfe-em-sp.component';

const routes = [
    {
        path: '',
        component: LandingSistemaNFEEmSP,
    },
];

@NgModule({
    declarations: [LandingSistemaNFEEmSP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [LandingSistemaNFEEmSP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingSistemaNfeEmSpModule {}
