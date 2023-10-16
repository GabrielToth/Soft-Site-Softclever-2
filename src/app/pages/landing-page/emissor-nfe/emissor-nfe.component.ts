import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emissor-nfe',
    templateUrl: 'emissor-nfe.component.html',
    styleUrls: ['emissor-nfe.component.scss'],
})
export class EmissorNFE {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emissor-NFE - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emissor-NFE - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
