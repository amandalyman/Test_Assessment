import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { TidbitsComponent } from './components/tidbits/tidbits.component';
import { IntroModule } from './components/intro/intro.module';
import { CustomCard } from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CustomCard,
    HobbiesComponent,
    TidbitsComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    IntroModule,
  ],
  exports: [],
  providers: [FormatNumberPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
