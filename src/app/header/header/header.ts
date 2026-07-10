import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isOpen: boolean = false;
  titre: string = 'Best App';
  liste = [
    { label: 'Home', route: '/home' },
    { label: 'Features', route: '/features' },
    { label: 'About', route: '/about' },
    { label: 'Review', route: '/review' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Contact', route: '/contact' },
  ];
}
