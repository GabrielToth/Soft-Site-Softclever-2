import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sa-fiscal',
    templateUrl: 'sat-fiscal.component.html',
    styleUrls: ['sat-fiscal.component.scss'],
})
export class SATFiscal {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('SAT-Fiscal - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'SAT-Fiscal - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
