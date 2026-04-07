import { Component, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { TranslationService } from '../services/translation.service';

interface Language {
  name: string;
  country: string;
  proficiency: string;
  level: number;
  flag: string;
}

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements AfterViewInit {
  public translationService = inject(TranslationService);

  languages: Language[] = [
    {
      name: 'English',
      country: 'USA',
      proficiency: 'Professional Working',
      level: 70,
      flag: 'https://flagcdn.com/w80/us.png'
    },
    {
      name: 'French',
      country: 'France',
      proficiency: 'Native',
      level: 60,
      flag: 'https://flagcdn.com/w80/fr.png'
    },
    {
      name: 'Arabic',
      country: 'Tunisia',
      proficiency: 'Native',
      level: 100,
      flag: 'https://flagcdn.com/w80/tn.png'
    }
  ];

  ngAfterViewInit() {
    gsap.from('.language-card', {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2
    });
  }
}