import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emissor-nfesp',
    templateUrl: 'emissor-nfe-sp.component.html',
    styleUrls: ['emissor-nfe-sp.component.scss'],
})
export class EmissorNFESP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emissor-NFE-SP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emissor-NFE-SP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
