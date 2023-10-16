import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sistema-empresarial',
    templateUrl: 'sistema-empresarial.component.html',
    styleUrls: ['sistema-empresarial.component.scss'],
})
export class SistemaEmpresarial {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Sistema-Empresarial - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Sistema-Empresarial - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
