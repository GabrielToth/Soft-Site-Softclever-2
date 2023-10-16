import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { EmissorNFESefazEmSP } from './emissor-nfe-sefaz-em-sp.component';

const routes = [
    {
        path: '',
        component: EmissorNFESefazEmSP,
    },
];

@NgModule({
    declarations: [EmissorNFESefazEmSP],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [EmissorNFESefazEmSP],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EmissorNfeSefazEmSpModule {}
