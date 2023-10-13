import { Component, Input } from '@angular/core';

@Component({
    selector: 'content-section',
    templateUrl: './content-section.component.html',
    styleUrls: ['./content-section.component.scss']
})
export class ContentSection {
    @Input() contentDataList!: { image: string, title: string, paragraphs: string[] }[];
}
