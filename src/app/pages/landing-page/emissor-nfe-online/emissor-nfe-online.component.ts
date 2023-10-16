import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emissor-nf-online',
    templateUrl: 'emissor-nfe-online.component.html',
    styleUrls: ['emissor-nfe-online.component.scss'],
})
export class EmissorNFEOnline {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emissor-NFE-Online - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emissor-NFE-Online - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
