import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmissorNFE } from './emissor-nfe.component';

const routes = [
    {
        path: '',
        component: EmissorNFE,
    },
];

@NgModule({
    declarations: [EmissorNFE],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmissorNFE],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmissorNfeModule {}
