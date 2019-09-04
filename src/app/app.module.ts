import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SboxComponent } from './components/sbox/sbox.component';
import { HeaderComponent } from './components/header/header.component';
import { FsongsComponent } from './components/fsongs/fsongs.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistComponent } from './components/artist/artist.component';


@NgModule({
  
  declarations: [
    AppComponent,
    SboxComponent,
    HeaderComponent,
    FsongsComponent,
    FooterComponent,
    HomeComponent,
    ArtistComponent,
    
    
  ],
  imports: [
    BrowserModule,
    NgModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
