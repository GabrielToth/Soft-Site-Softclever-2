import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-emissor-nfe',
    templateUrl: 'software-emissor-nfe.component.html',
    styleUrls: ['software-emissor-nfe.component.scss'],
})
export class SoftwareEmissorNFE {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-Emissor-NFE - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-Emissor-NFE - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
