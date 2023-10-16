import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-erp',
    templateUrl: 'software-erp.component.html',
    styleUrls: ['software-erp.component.scss'],
})
export class SoftwareERP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-ERP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-ERP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
