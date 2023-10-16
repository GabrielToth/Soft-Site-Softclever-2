import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-de-gestao-erp',
    templateUrl: 'sistema-de-gestao-erp.component.html',
    styleUrls: ['sistema-de-gestao-erp.component.scss'],
})
export class SistemaDeGestaoERP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-de-Gestao-ERP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-de-Gestao-ERP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
