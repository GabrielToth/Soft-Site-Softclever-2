import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../../../components/components.module';
import { SoftwareSAT } from './software-sat.component';

const routes = [
    {
        path: '',
        component: SoftwareSAT,
    },
];

@NgModule({
    declarations: [SoftwareSAT],
    imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
    exports: [SoftwareSAT],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SoftwareSatModule {}
