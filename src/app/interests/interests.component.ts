import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../services/translation.service';

interface Interest {
  title: string;
  description: string;
  backgroundClass: string;
}

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  public translationService = inject(TranslationService);

  get interests(): Interest[] {
    return this.translationService.get<Interest[]>('interests.items');
  }
}