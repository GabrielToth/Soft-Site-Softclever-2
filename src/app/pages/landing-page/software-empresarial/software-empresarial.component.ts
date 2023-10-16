import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-empresarial',
    templateUrl: 'software-empresarial.component.html',
    styleUrls: ['software-empresarial.component.scss'],
})
export class SoftwareEmpresarial {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-Empresarial - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-Empresarial - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
