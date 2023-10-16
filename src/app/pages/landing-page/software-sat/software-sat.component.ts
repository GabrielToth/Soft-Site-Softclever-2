import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
    selector: 'software-sat',
    templateUrl: 'software-sat.component.html',
    styleUrls: ['software-sat.component.scss'],
})
export class SoftwareSAT {
    constructor(private title: Title, private meta: Meta) {
        this.title.setTitle('Software-SAT - Soft Clever');
        this.meta.addTags([
            {
                name: 'description',
                content: 'A solução para a gestão empresarial do seu negócio.',
            },
            {
                property: 'og:title',
                content: 'Software-SAT - Soft Clever',
            },
            {
                property: 'og:description',
                content: 'A solução ideal para a gestão empresarial do seu negócio.',
            },
        ]);
    }
}
