import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-erp',
    templateUrl: 'sistema-erp.component.html',
    styleUrls: ['sistema-erp.component.scss'],
})
export class SistemaERP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-ERP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-ERP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
