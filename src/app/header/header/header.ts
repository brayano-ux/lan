import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isOpen: boolean = false;
  titre: string = 'Best App';
  liste: string[] = ['Home', 'Features', 'About','Review','Pricing','Contact'];
}
