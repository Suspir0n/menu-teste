import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./menu/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'pageone',
    loadChildren: () => import('./menu/pageone/pageone.module').then( m => m.PageonePageModule)
  },
  {
    path: 'pagetwo',
    loadChildren: () => import('./menu/pagetwo/pagetwo.module').then( m => m.PagetwoPageModule)
  },
  {
    path: 'pagethree',
    loadChildren: () => import('./menu/pagethree/pagethree.module').then( m => m.PagethreePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
