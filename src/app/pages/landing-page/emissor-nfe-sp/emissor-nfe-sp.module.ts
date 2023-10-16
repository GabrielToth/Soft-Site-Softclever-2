import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmissorNFESP } from './emissor-nfe-sp.component';

const routes = [
    {
        path: '',
        component: EmissorNFESP,
    },
];

@NgModule({
    declarations: [EmissorNFESP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmissorNFESP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmissorNfeSpModule {}
