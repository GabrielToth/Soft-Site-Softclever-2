import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-nf-sefaz-em-sp',
    templateUrl: 'sistema-nfe-sefaz-em-sp.component.html',
    styleUrls: ['sistema-nfe-sefaz-em-sp.component.scss'],
})
export class SistemaNFESefazEmSP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-NFE-Sefaz-em-SP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-NFE-Sefaz-em-SP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
