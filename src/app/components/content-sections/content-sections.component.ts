import { Component, Input } from '@angular/core';

@Component({
    selector: 'content-sections',
    templateUrl: 'content-sections.component.html',
    styleUrls: ['content-sections.component.scss'],
})
export class ContentSections {
    @Input() image!: string
    @Input() leftSections!: { image: string, title: string, paragraphs: string[] }[]
    @Input() rightSections!: { image: string, title: string, paragraphs: string[] }[]
}
