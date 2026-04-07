import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  constructor() {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
  }

  // Initialize all animations when app loads
  initAnimations(): void {
    this.initHeroAnimations();
    this.initSectionAnimations();
    this.initCardAnimations();
    this.initSkillAnimations();
  }

  // Hero section animations
  private initHeroAnimations(): void {
    // Hero title animation
    gsap.from('.hero-title', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Hero subtitle animation
    gsap.from('.hero-subtitle', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: 'power3.out'
    });

    // Hero description animation
    gsap.from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: 'power3.out'
    });

    // Hero buttons animation
    gsap.from('.hero-buttons', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: 0.6,
      ease: 'power3.out'
    });

    // Hero avatar animation
    gsap.from('.hero-avatar', {
      scale: 0.8,
      opacity: 0,
      rotation: -10,
      duration: 1,
      delay: 0.3,
      ease: 'back.out(1.7)'
    });

    // Floating background elements
    gsap.to('.floating-element', {
      y: 'random(-20, 20)',
      duration: 'random(3, 5)',
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.5
    });
  }

  // Section reveal animations on scroll
  private initSectionAnimations(): void {
    // Animate sections when they come into view
    gsap.utils.toArray('.section').forEach((section: any) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Animate section titles
    gsap.utils.toArray('.section h2').forEach((title: any) => {
      gsap.from(title, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // Card animations with stagger
  private initCardAnimations(): void {
    // Experience cards
    gsap.utils.toArray('.experience-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Project cards
    gsap.utils.toArray('.project-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        scale: 0.9,
        duration: 0.7,
        ease: 'power3.out',
        delay: index * 0.15,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Education/Languages/Interests cards
    gsap.utils.toArray('.info-card').forEach((card: any, index: number) => {
      gsap.from(card, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: index * 0.08,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // Skills animations
  private initSkillAnimations(): void {
    // Skill category cards
    gsap.utils.toArray('.skill-category').forEach((category: any, index: number) => {
      gsap.from(category, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: index * 0.1,
        scrollTrigger: {
          trigger: category,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Skill pills with stagger
    gsap.utils.toArray('.skill-pill').forEach((pill: any, index: number) => {
      gsap.from(pill, {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)',
        delay: index * 0.05,
        scrollTrigger: {
          trigger: pill,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      });
    });

    // Progress bars animation
    gsap.utils.toArray('.skill-progress').forEach((progress: any) => {
      const width = progress.style.width;
      gsap.from(progress, {
        width: '0%',
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: progress,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }

  // Utility method for custom animations
  animateElement(selector: string, options: any): void {
    gsap.to(selector, options);
  }

  // Scroll to section smoothly
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (!element) {
      return;
    }

    const headerOffset = 80;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const scrollTo = targetPosition - headerOffset;

    window.scrollTo({ top: scrollTo, behavior: 'smooth' });
  }

  // Hover animations for cards
  addCardHoverAnimations(): void {
    gsap.utils.toArray('.info-card, .project-card').forEach((card: any) => {
      const hoverTl = gsap.timeline({ paused: true });

      hoverTl
        .to(card, { y: -8, duration: 0.3, ease: 'power2.out' })
        .to(card.querySelector('.card-shadow'), { opacity: 0.3, scale: 1.05, duration: 0.3 }, 0);

      card.addEventListener('mouseenter', () => hoverTl.play());
      card.addEventListener('mouseleave', () => hoverTl.reverse());
    });
  }

  // Button hover animations
  addButtonAnimations(): void {
    gsap.utils.toArray('.btn, .read-more-btn').forEach((btn: any) => {
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, { scale: 1.05, duration: 0.2, ease: 'power2.out' });
      });

      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, duration: 0.2, ease: 'power2.out' });
      });
    });
  }
}