import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

interface EducationItem {
  title: string;
  institution: string;
  period: string;
  cardClass?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  public translationService = inject(TranslationService);

  get educationItems(): EducationItem[] {
    return this.translationService.get<EducationItem[]>('education.items');
  }
}