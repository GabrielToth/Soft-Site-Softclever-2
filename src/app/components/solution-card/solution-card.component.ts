import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-solution-card',
    templateUrl: './solution-card.component.html',
    styleUrls: ['./solution-card.component.scss'],
})
export class SolutionCardComponent {
    @Input() heading!: string
    @Input() text!: string
    @Input() image!: string
    @Input() image_alt?: string
}
