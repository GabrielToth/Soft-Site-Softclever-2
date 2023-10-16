import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareEmissorNFE } from './software-emissor-nfe.component';

const routes = [
    {
        path: '',
        component: SoftwareEmissorNFE,
    },
];

@NgModule({
    declarations: [SoftwareEmissorNFE],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareEmissorNFE],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareEmissorNfeModule {}
