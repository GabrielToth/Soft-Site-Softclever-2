import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-content-section',
    templateUrl: './content-section.component.html',
    styleUrls: ['./content-section.component.scss']
})
export class ContentSectionComponent {
    @Input() contentDataList: { image: string, title: string, paragraphs: string[] }[];
}
