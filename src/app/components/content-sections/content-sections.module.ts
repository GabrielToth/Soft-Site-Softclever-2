import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentSection } from './content-section/content-section.component';
import { ContentSections } from './content-sections.component';



@NgModule({
  declarations: [ContentSection, ContentSections],
  imports: [
    CommonModule
  ],
  exports: [ContentSection, ContentSections]
})
export class ContentSectionsModule { }
