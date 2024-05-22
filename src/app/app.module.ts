import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MovieSelectionComponent } from './movie-selection/movie-selection.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MovieSelectionComponent,
    SeatSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
