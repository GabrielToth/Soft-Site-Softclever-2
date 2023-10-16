import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SistemaNFESefazEmSP } from './sistema-nfe-sefaz-em-sp.component';

const routes = [
    {
        path: '',
        component: SistemaNFESefazEmSP,
    },
];

@NgModule({
    declarations: [SistemaNFESefazEmSP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SistemaNFESefazEmSP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SistemaNfeSefazEmSpModule {}
