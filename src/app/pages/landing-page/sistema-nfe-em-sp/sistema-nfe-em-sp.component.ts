import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-nf-em-sp',
    templateUrl: 'sistema-nfe-em-sp.component.html',
    styleUrls: ['sistema-nfe-em-sp.component.scss'],
})
export class SistemaNFEEmSP {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-NFE-em-SP - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-NFE-em-SP - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
