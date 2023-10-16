import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'er-sistema',
    templateUrl: 'erp-sistema.component.html',
    styleUrls: ['erp-sistema.component.scss'],
})
export class ERPSistema {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('ERP-Sistema - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'ERP-Sistema - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
