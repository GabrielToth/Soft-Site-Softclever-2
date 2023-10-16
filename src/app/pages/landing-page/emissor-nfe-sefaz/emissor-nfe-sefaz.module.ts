import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmissorNFESefaz } from './emissor-nfe-sefaz.component';

const routes = [
    {
        path: '',
        component: EmissorNFESefaz,
    },
];

@NgModule({
    declarations: [EmissorNFESefaz],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmissorNFESefaz],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmissorNfeSefazModule {}
