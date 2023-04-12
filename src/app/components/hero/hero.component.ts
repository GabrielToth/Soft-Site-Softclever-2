import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGZpbmFuY2V8ZW58MHx8fHwxNjgxMzA5OTY3&ixlib=rb-4.0.3&w=1500'
  @Input()
  heading: string = 'Varejo'
  @Input()
  image_alt: string = 'image'
  @Input()
  image_src1: string = '9842fe7a-22e5-4788-afe4-03540ff143e6'
  @Input()
  image_alt1: string = 'logo'
  constructor() {}
}
