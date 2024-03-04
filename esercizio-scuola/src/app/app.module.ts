//Angular import
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//App import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { FormClassiComponent } from './components/form-classi/form-classi.component';
import { ListaClassiComponent } from './components/lista-classi/lista-classi.component';
import { DettaglioClasseComponent } from './components/dettaglio-classe/dettaglio-classe.component';
import { HomepageComponent } from './components/homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    FormClassiComponent,
    ListaClassiComponent,
    DettaglioClasseComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
