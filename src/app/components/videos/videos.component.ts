import { Component, Input, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
    selector: 'app-videos',
    templateUrl: 'videos.component.html',
    styleUrls: ['videos.component.scss'],
})
export class Videos implements AfterViewInit {
    constructor(private renderer: Renderer2, private el: ElementRef) {}

    ngAfterViewInit() {
        const youtubeElements = this.el.nativeElement.querySelectorAll('.youtube');

        for (let i = 0; i < youtubeElements.length; i++) {
            const element = youtubeElements[i] as HTMLElement;
            const source = 'https://img.youtube.com/vi/' + element.dataset.embed + '/sddefault.jpg';

            let image = new Image();

            if (element.dataset.embed === 'S6Vouca8pwQ') {
                image.src = '../assets/images/jpg/yt-thumb-pre-venda.jpg';
            } else {
                image.src = source;
            }

            // Adicione a classe "thumb-video" à imagem
            image.classList.add('thumb-video');

            image.addEventListener(
                'load',
                (function (i) {
                    return function () {
                        youtubeElements[i].appendChild(image);
                    };
                })(i)
            );

            element.addEventListener('click', function () {
                let iframe = document.createElement('iframe');
                iframe.setAttribute('frameborder', '0');
                iframe.setAttribute('allowfullscreen', '');
                iframe.setAttribute(
                    'src',
                    'https://www.youtube.com/embed/' + this.dataset.embed + '?rel=0&showinfo=0&autoplay=1'
                );

                // Adicione a classe "youtube-video" ao iframe
                iframe.classList.add('youtube-video');

                this.innerHTML = '';
                this.appendChild(iframe);
            });
        }
    }
}
