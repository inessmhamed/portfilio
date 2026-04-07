import { Component, inject } from '@angular/core';
import { AnimationService } from '../services/animation.service';
import { Language, TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  private animationService = inject(AnimationService);
  public translationService = inject(TranslationService);

  scrollToSection(sectionId: string): void {
    this.animationService.scrollToSection(sectionId);
  }

  setLanguage(lang: Language): void {
    this.translationService.setLanguage(lang);
  }

  isActiveLang(lang: Language): boolean {
    return this.translationService.language === lang;
  }
}
