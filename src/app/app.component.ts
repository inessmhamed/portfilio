import { Component, OnInit, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { LanguagesComponent } from './languages/languages.component';
import { InterestsComponent } from './interests/interests.component';

import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    InterestsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-portfolio';

  private animationService = inject(AnimationService);

  ngOnInit(): void {
    // Initialize GSAP animations after view is ready
    setTimeout(() => {
      this.animationService.initAnimations();
      this.animationService.addCardHoverAnimations();
      this.animationService.addButtonAnimations();
    }, 100);
  }
}