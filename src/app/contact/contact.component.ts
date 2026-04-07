import { Component, AfterViewInit, inject } from '@angular/core';
import gsap from 'gsap';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements AfterViewInit {
  public translationService = inject(TranslationService);

  ngAfterViewInit(): void {
    gsap.from('.contact-card', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: 'power3.out'
    });
  }
}
