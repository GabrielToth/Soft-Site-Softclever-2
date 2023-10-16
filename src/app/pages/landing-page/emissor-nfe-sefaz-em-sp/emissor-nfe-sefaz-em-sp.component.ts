import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'emissor-nf-sefaz-em-sp',
    templateUrl: 'emissor-nfe-sefaz-em-sp.component.html',
    styleUrls: ['emissor-nfe-sefaz-em-sp.component.scss'],
})
export class EmissorNFESefazEmSP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Emissor-NFE-Sefaz-em-SP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Emissor-NFE-Sefaz-em-SP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
