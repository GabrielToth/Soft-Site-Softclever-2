import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmissorNFEOnline } from './emissor-nfe-online.component';

const routes = [
    {
        path: '',
        component: EmissorNFEOnline,
    },
];

@NgModule({
    declarations: [EmissorNFEOnline],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmissorNFEOnline],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmissorNfeOnlineModule {}
