import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation-demo',
  standalone: true,
  template: `
    <div class="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <h1 class="text-4xl font-bold text-center mb-8 text-gray-800">Angular + Tailwind Animations Demo</h1>

      <!-- Angular Animation Example -->
      <div class="max-w-md mx-auto mb-8">
        <h2 class="text-2xl font-semibold mb-4">Angular Animations</h2>
        <div
          class="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
          [@cardState]="cardState"
          (click)="toggleCard()"
        >
          <h3 class="text-xl font-bold mb-2">Click me!</h3>
          <p class="text-gray-600">This card uses Angular's animation system</p>
        </div>
      </div>

      <!-- Tailwind Animation Examples -->
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Tailwind Animations</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">

          <!-- Fade In Animation -->
          <div class="bg-white p-6 rounded-lg shadow-lg animate-fade-in">
            <h3 class="text-xl font-bold mb-2 text-blue-600">Fade In</h3>
            <p class="text-gray-600">Smooth fade-in animation using Tailwind</p>
          </div>

          <!-- Bounce Animation -->
          <div class="bg-white p-6 rounded-lg shadow-lg animate-bounce-in">
            <h3 class="text-xl font-bold mb-2 text-green-600">Bounce In</h3>
            <p class="text-gray-600">Bouncy entrance animation</p>
          </div>

          <!-- Float Animation -->
          <div class="bg-white p-6 rounded-lg shadow-lg animate-float">
            <h3 class="text-xl font-bold mb-2 text-purple-600">Floating</h3>
            <p class="text-gray-600">Continuous floating motion</p>
          </div>
        </div>
      </div>

      <!-- Hover Effects -->
      <div class="max-w-4xl mx-auto mt-8">
        <h2 class="text-2xl font-semibold mb-4">Hover Effects</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 cursor-pointer">
            Scale on Hover
          </div>
          <div class="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            Lift on Hover
          </div>
          <div class="bg-purple-500 text-white p-4 rounded-lg hover:bg-purple-600 hover:rotate-3 transition-all duration-300 cursor-pointer">
            Rotate on Hover
          </div>
          <div class="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600 hover:blur-sm transition-all duration-300 cursor-pointer">
            Blur Effect
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('cardState', [
      state('normal', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      state('expanded', style({
        transform: 'scale(1.05)',
        opacity: 0.9,
        backgroundColor: '#f0f9ff'
      })),
      transition('normal <=> expanded', animate('300ms ease-in-out'))
    ])
  ]
})
export class AnimationDemoComponent {
  cardState = 'normal';

  toggleCard() {
    this.cardState = this.cardState === 'normal' ? 'expanded' : 'normal';
  }
}