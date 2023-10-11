import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TitleService {
    constructor() {}

    addScript(src: string) {
        document.head.appendChild(document.createElement('script')).src = src;
    }
}
