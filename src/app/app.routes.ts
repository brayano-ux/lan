import { Routes } from '@angular/router';
import { Main } from './main/main/main';
import { Features } from './features/features/features';
import { About } from './about/about/about';
import { Avis } from './avis/avis/avis';
import { Pricing } from './pricing/pricing/pricing';
import { Contact } from './contact/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Main },
  { path: 'features', component: Features },
  { path: 'about', component: About },
  { path: 'review', component: Avis },
  { path: 'pricing', component: Pricing },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: 'home' },
];
