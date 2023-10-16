import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-er-de-gestao',
    templateUrl: 'sistema-erp-de-gestao.component.html',
    styleUrls: ['sistema-erp-de-gestao.component.scss'],
})
export class SistemaERPDeGestao {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-ERP-de-Gestao - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-ERP-de-Gestao - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
