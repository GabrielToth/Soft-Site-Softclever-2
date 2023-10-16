import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-de-gestao',
    templateUrl: 'sistema-de-gestao.component.html',
    styleUrls: ['sistema-de-gestao.component.scss'],
})
export class SistemaDeGestao {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-de-Gestao - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-de-Gestao - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
