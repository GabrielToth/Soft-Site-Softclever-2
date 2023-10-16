import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'sat',
    templateUrl: 'sat.component.html',
    styleUrls: ['sat.component.scss'],
})
export class SAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
