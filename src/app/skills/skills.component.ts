import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslationService } from '../services/translation.service';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  level: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  animations: [
    trigger('skillAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8) translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ])
    ]),
    trigger('progressAnimation', [
      transition(':enter', [
        style({ width: '0%' }),
        animate('1500ms 300ms ease-out')
      ])
    ])
  ]
})
export class SkillsComponent {
  public translationService = inject(TranslationService);

 skillGroups = [
  {
    title: 'Frontend',
    icon: '🟢',
    skills: ['Angular', 'React', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend',
    icon: '🔵',
    skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs']
  },
  {
    title: 'Tools',
    icon: '🟣',
    skills: ['Git', 'Docker', 'GitHub Actions', 'Linux']
  },
  {
    title: 'Soft Skills',
    icon: '🟠',
    skills: ['Teamwork', 'Communication', 'Agile']
  }
];

  cardTransforms: { [key: number]: string } = {};
  cardShadows: { [key: number]: string } = {};
  iconScales: { [key: number]: number } = {};

  onMouseMove(event: MouseEvent, index: number) {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -15;
    const rotateY = ((x - centerX) / centerX) * 15;

    this.cardTransforms[index] = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    // Enhanced shadow based on tilt
    const shadowIntensity = Math.abs(rotateX) + Math.abs(rotateY);
    this.cardShadows[index] = `0 ${14 + shadowIntensity}px ${30 + shadowIntensity}px rgba(15, 23, 42, ${0.15 + shadowIntensity * 0.01})`;

    // Icon scaling based on mouse proximity to center
    const distanceFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
    const maxDistance = Math.sqrt(centerX ** 2 + centerY ** 2);
    const scale = 1 + (1 - distanceFromCenter / maxDistance) * 0.2;
    this.iconScales[index] = scale;
  }

  onMouseLeave(index: number) {
    this.cardTransforms[index] = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    this.cardShadows[index] = '0 10px 22px rgba(15, 23, 42, 0.06)';
    this.iconScales[index] = 1;
  }

  getCategoryColor(category: string): string {
    const colors = {
      frontend: 'bg-blue-500',
      backend: 'bg-green-500',
      tools: 'bg-purple-500',
      soft: 'bg-orange-500'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500';
  }

  getCategoryBg(category: string): string {
    const colors = {
      frontend: 'bg-blue-50 border-blue-200',
      backend: 'bg-green-50 border-green-200',
      tools: 'bg-purple-50 border-purple-200',
      soft: 'bg-orange-50 border-orange-200'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200';
  }

  dotsActive(level: number): number {
    return Math.ceil(level / 20);
  }
}
