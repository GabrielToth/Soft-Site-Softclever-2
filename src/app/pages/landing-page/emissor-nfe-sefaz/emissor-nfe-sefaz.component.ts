import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emissor-nf-sefaz',
    templateUrl: 'emissor-nfe-sefaz.component.html',
    styleUrls: ['emissor-nfe-sefaz.component.scss'],
})
export class EmissorNFESefaz {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emissor-NFE-Sefaz - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emissor-NFE-Sefaz - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
