import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClassiComponent } from './components/lista-classi/lista-classi.component';
import { DettaglioClasseComponent } from './components/dettaglio-classe/dettaglio-classe.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormClassiComponent } from './components/form-classi/form-classi.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
  { path: 'formClassi', component: FormClassiComponent },
  { path: 'listaClassi', component: ListaClassiComponent },
  {
    path: 'listaClassi/dettaglioClassi',
    children: [{ path: ':id', component: DettaglioClasseComponent }],
  },
  { path: '404', component: ErrorPageComponent },
  //{ path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
