import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-nf-sefaz',
    templateUrl: 'sistema-nfe-sefaz.component.html',
    styleUrls: ['sistema-nfe-sefaz.component.scss'],
})
export class SistemaNFESefaz {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-NFE-Sefaz - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-NFE-Sefaz - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
