import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslationService } from '../services/translation.service';

interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  technologies: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ExperienceComponent implements AfterViewInit, OnDestroy {
  public translationService = inject(TranslationService);
  @ViewChildren('timelineItem') timelineItems!: QueryList<ElementRef>;

  private observer?: IntersectionObserver;

  get experiences(): Experience[] {
    return this.translationService.get<Experience[]>('experience.experiences');
  }

  ngAfterViewInit(): void {
    this.initObserver();
    this.observeTimelineItems();
    this.timelineItems.changes.subscribe(() => this.observeTimelineItems());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private initObserver(): void {
    if (this.observer) {
      return;
    }

    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              this.observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );
    }
  }

  private observeTimelineItems(): void {
    if (!this.timelineItems || this.timelineItems.length === 0) {
      return;
    }

    if (this.observer) {
      this.timelineItems.forEach((item) => this.observer?.observe(item.nativeElement));
    } else {
      this.timelineItems.forEach((item) => item.nativeElement.classList.add('visible'));
    }
  }
}
