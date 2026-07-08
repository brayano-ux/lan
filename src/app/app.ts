import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header/header';
import{ Main } from './main/main/main';
import { Features } from './features/features/features';
import{About}  from './about/about/about';
import{Avis} from './avis/avis/avis'
import { Pricing } from './pricing/pricing/pricing';  
import{Contact} from './contact/contact/contact'
import{Footer} from './footer/footer/footer'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Main,Features,About,Avis,Pricing,Contact,Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('landing');
}
