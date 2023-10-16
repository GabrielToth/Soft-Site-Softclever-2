import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-er-comercial',
    templateUrl: 'sistema-erp-comercial.component.html',
    styleUrls: ['sistema-erp-comercial.component.scss'],
})
export class SistemaERPComercial {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-ERP-Comercial - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-ERP-Comercial - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
